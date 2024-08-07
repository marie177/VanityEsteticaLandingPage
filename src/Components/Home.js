import React from 'react';
import Navbar from './Navbar';
import About from './About';
import BannerMisionVision from './BannerMisionVision';
import Treatments from './Treatments';
import Contact from './Contact/Contact';
import { NavHashLink } from 'react-router-hash-link';
import Afecciones from './Afecciones/Afecciones';

const Home = () => {
  return (
    <div className='home-container'>

      <div className='home-banner-container' id='home'>

        <div className='home-banner-image-background-container'>

          <div className='home-banner-image-background'></div>
          <div className='home-banner-image-title'>
            <h1>Descubrí tu mejor versión en Vanity Beauty Center</h1>
          </div>
        </div>
        <div className='home-banner-text'>
          <h2>Personalizamos nuestros tratamientos en base a las necesidades individuales de cada paciente.</h2>
          <p>Queremos ayudarte a alcanzar tu máximo potencial.</p>

          <NavHashLink to="/home#about" className='btn-contact btn-contact-dark'>Sobre Nosotros</NavHashLink>      
        </div>
      </div>
      <Afecciones />
      <About />
      <BannerMisionVision />
      <Treatments />
      <Contact />
    </div>
  )
}

export default Home