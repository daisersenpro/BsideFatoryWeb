<#
PowerShell helper to initialize a git repo (if needed), commit files and push to the remote repo.
Usage: Open PowerShell in the project directory and run:
    ./push-to-github.ps1

Notes:
- This script will prompt for user.name and user.email if they are not configured.
- It will add a remote named 'origin' pointing to the GitHub HTTPS URL below if not present.
- It will try to create/use branch 'main' by default for the initial push; if that fails it will attempt 'master'.
- You must have git installed and available in PATH. GitHub requires a personal access token when using HTTPS and 2FA.
#>

$ErrorActionPreference = 'Stop'

# --- Configure this remote URL (provided by you) ---
$remoteUrl = 'https://github.com/daisersenpro/BsideFatoryWeb.git'

Write-Host "Remote URL: $remoteUrl`n"

function Ensure-GitInstalled {
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Write-Error "Git is not installed or not found in PATH. Please install git first: https://git-scm.com/downloads"
        exit 1
    }
}

function Ensure-GitRepo {
    if (-not (Test-Path -Path .git -PathType Container)) {
        Write-Host "No git repository found. Initializing..."
        git init
    } else {
        Write-Host "Git repository already initialized."
    }
}

function Ensure-GitUser {
    $name = git config --get user.name 2>$null
    $email = git config --get user.email 2>$null
    if (-not $name) {
        $name = Read-Host 'Git user.name not configured. Enter your name (will be set locally)'
        if ($name) { git config user.name "$name" }
    } else { Write-Host "git user.name = $name" }
    if (-not $email) {
        $email = Read-Host 'Git user.email not configured. Enter your email (will be set locally)'
        if ($email) { git config user.email "$email" }
    } else { Write-Host "git user.email = $email" }
}

function Add-And-Commit {
    git add --all
    # Detect if there are staged changes to commit
    try {
        git commit -m "Initial commit: add project files, .gitignore and README" 2>$null
        Write-Host "Commit created."
    } catch {
        $msg = $_.Exception.Message
        if ($msg -match "nothing to commit") {
            Write-Host "No changes to commit."
        } else {
            Write-Host "Commit failed or there was nothing to commit: $msg"
        }
    }
}

function Ensure-Remote {
    $exists = $false
    try {
        $url = git remote get-url origin 2>$null
        if ($url) { $exists = $true; Write-Host "Remote 'origin' already set to: $url" }
    } catch {
        # remote not set
    }
    if (-not $exists) {
        Write-Host "Adding remote 'origin' -> $remoteUrl"
        git remote add origin $remoteUrl
    }
}

function Push-To-Remote {
    param(
        [string]$branch = 'main'
    )
    try {
        # create or move current branch to desired name
        git branch -M $branch
        Write-Host "Pushing branch '$branch' to origin..."
        git push -u origin $branch
        Write-Host "Push to origin/$branch successful."
        return $true
    } catch {
        Write-Warning "Push to origin/$branch failed: $($_.Exception.Message)"
        return $false
    }
}

# --- Execution ---
Ensure-GitInstalled
Ensure-GitRepo
Ensure-GitUser
Add-And-Commit
Ensure-Remote

if (-not (Push-To-Remote -branch 'main')) {
    Write-Host "Trying fallback branch 'master'..."
    if (-not (Push-To-Remote -branch 'master')) {
        Write-Error "Both pushes failed. Check your network/authentication and that the remote URL is correct. If you use HTTPS, ensure you authenticate with a token when prompted." 
        exit 1
    }
}

Write-Host "All done. If prompted for credentials when pushing, provide your GitHub credentials or a Personal Access Token." -ForegroundColor Green
