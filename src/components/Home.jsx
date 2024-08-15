import React from 'react';
import Hero from './Hero.jsx';
import FAQ from './FAQ.jsx';
import Footer from './Footer.jsx';

function Home() {
  return (
    <div style={{ paddingBottom: '30px' }}>
      <Hero />
      <FAQ />
      <Footer/>
    </div>
  );
}

export default Home;
