import React from 'react';
import Navbar from './Navbar';
import About from './About';
import BannerMisionVision from './BannerMisionVision';
import Treatments from './Treatments';
import Contact from './Contact/Contact';
import Footer from './Footer';
import BannerBackgroundImage from '../Assets/BgImage.jpg';
import BannerBackgroundImage2 from '../Assets/images/HomeBackgroundImage.jpg';


const Home = () => {


  return (
    <div className='home-container'>
         
      <div className='home-banner-container' id='home'>
      
        <div  className='home-banner-image-background-container'> 
      
          <div className='home-banner-image-background'></div>
          <div className='home-banner-image-title'>
          <h1>Vanity Estética</h1>
            <h2>Te brindamos las mejores soluciones a los numerosos problemas faciales y corporales</h2>
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