import React from 'react';
import Navbar from './Navbar';
import About from './About';
import BannerMisionVision from './BannerMisionVision';
import Treatments from './Treatments';
import Contact from './Contact/Contact';
import Footer from './Footer';
import BannerBackgroundImage from '../Assets/BgImage.jpg';

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>

        <div className='home-banner-container' id='home'>
            <div className='home-banner-image-background'>              
              <h1>VANITY</h1>       
              <h2>BEAUTY CENTER</h2>  
            </div>
            <div className='home-banner-text'>
              <p>Te brindamos las <strong>mejores soluciones</strong> a los numerosos problemas faciales y corporales.</p>
            </div>
        </div>

        <About/>
        <BannerMisionVision/>
        <Treatments/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home