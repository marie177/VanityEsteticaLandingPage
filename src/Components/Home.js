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
            <a className='homer-banner-btn' href='#about'>VER MÁS <span className='btn-contact--icon'></span> </a>
          </div>
        </div>
        <div className='home-banner-text'>
          <p>Te brindamos las <strong>mejores soluciones</strong> a los numerosos problemas faciales y corporales.</p>
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