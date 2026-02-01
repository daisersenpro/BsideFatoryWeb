import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Services from './components/Services';
import Discography from './components/Discography';
import Audios from './components/Audios';
import Videos from './components/Videos';
import Events from './components/Events';
import Merch from './components/Merch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DiscographyFull from './pages/DiscographyFull';
import VideosFull from './pages/VideosFull';
import Bandas from './pages/Bandas';
import Solistas from './pages/Solistas';
import Colaboraciones from './pages/Colaboraciones';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [route, setRoute] = useState<string>(window.location.pathname || '/');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((path: string) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
      setRoute(path);
    }
  }, []);

  if (route === '/discografia-completa') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
        <Navbar onNavigate={navigate} />
        <DiscographyFull />
        <Footer />
      </div>
    );
  }

  if (route === '/videos-completos') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
        <Navbar onNavigate={navigate} />
        <VideosFull />
        <Footer />
      </div>
    );
  }

  if (route === '/bandas') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
        <Navbar onNavigate={navigate} />
        <Bandas />
        <Footer />
      </div>
    );
  }

  if (route === '/solistas') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
        <Navbar onNavigate={navigate} />
        <Solistas />
        <Footer />
      </div>
    );
  }

  if (route === '/colaboraciones') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
        <Navbar onNavigate={navigate} />
        <Colaboraciones />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
      <Navbar onNavigate={navigate} />
      <Hero isLoaded={isLoaded} />
  <About />
  <Artists onNavigate={navigate} />
  <Services />
      <Discography onNavigate={navigate} />
      <Audios />
      <Videos onNavigate={navigate} />
      <Events />
      <Merch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
