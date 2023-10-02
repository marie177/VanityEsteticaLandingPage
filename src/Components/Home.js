import React from 'react';
import Navbar from './Navbar';
import About from './About';
import BannerMisionVision from './BannerMisionVision';
import Treatments from './Treatments';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div className='home-container'>
         
      <div className='home-banner-container' id='home'>
      
        <div  className='home-banner-image-background-container'> 
      
          <div className='home-banner-image-background'></div>
          <div className='home-banner-image-title'>
          <h1>Vanity </h1>
            <h2>BEAUTY CENTER</h2>
          </div>
        </div>
        <div className='home-banner-text'>
          <p>Ponemos a tu disposición las <strong>soluciones más avanzadas</strong>  para mejorar afecciones estéticas, tanto corporales y faciales.</p>
        </div>
      </div>
    
      <About />
      <BannerMisionVision />
      <Treatments />
      <Contact />
    </div>
  )
}

export default Home