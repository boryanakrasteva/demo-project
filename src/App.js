import About from './components/About';
import Casino from './components/Casino';
import CTA from './components/CTA';
import Events from './components/Events';
import Hero from './components//Hero';
import Instagram from './components/Instagram';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import { useEffect } from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <div className="App">
      <Hero />
      <About />
      <Casino />
      <CTA />
      <Events />
      <Services />
      <Instagram />
      <Subscribe />
    </div>
  );
}

export default App;
