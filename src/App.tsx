import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Artists from './components/Artists';
import Discography from './components/Discography';
import Audios from './components/Audios';
import Videos from './components/Videos';
import Events from './components/Events';
import Merch from './components/Merch';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
      <Navbar />
      <Hero isLoaded={isLoaded} />
      <About />
      <Artists />
      <Discography />
      <Audios />
      <Videos />
      <Events />
      <Merch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
