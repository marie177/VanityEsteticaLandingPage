import React, { useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import BannerMisionVision from './BannerMisionVision';
import Treatments from './Treatments';
import Contact from './Contact/Contact';
import { NavHashLink } from 'react-router-hash-link';
import Afecciones from './Afecciones/Afecciones';
import VideoBg from '../Assets/videos/home_bg_desktop.mp4'
import VideoBgMobile from '../Assets/videos/home_bg_mobile.mp4'

const Home = () => {

  useEffect(() => {
    setVideoBg();
    setFadeEffectElements();
  }, []);

  // window.addEventListener("resize", function () {
  //   setVideoBg();
  // });

  const setVideoBg = () => {
    var w = window.matchMedia("(max-width: 600px)");
    var vid = document.getElementById("bgVideo");
    var source = document.createElement("source");
    source.id = "srcVideo";
    source.setAttribute("type", "video/mp4");
    vid.appendChild(source);


    if (w.matches) {
      vid.pause();
      source.removeAttribute("src");
      source.setAttribute("src", VideoBgMobile);
      vid.load();
      vid.play();
    } else {
      vid.pause();
      source.removeAttribute("src");
      source.setAttribute("src", VideoBg);
      vid.load();
      vid.play();
    }
  }

  const setFadeEffectElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => {
      observer.observe(el);
    });
  }

  return (
    <div className='home-container'>

      <div className='home-banner-container' id='home'>

        <div className='home-banner-image-background-container'>
          <video id="bgVideo" autoPlay={true} muted loop>
            {/* <source src={VideoBg} type="video/mp4" /> */}
          </video>
          <div className='home-banner-image-title change'>
            <h1>Vanity Beauty Center</h1>
          </div>
          {/* <div className='home-banner-image-background'></div>
          <div className='home-banner-image-title'>
            <h1>Descubrí tu mejor versión en Vanity Beauty Center</h1>
          </div> */}
        </div>
        <div className='home-banner-text'>
          <h2 className='hidden'>Personalizamos nuestros tratamientos en base a las necesidades individuales de cada paciente.</h2>
          <p className='hidden'>Queremos ayudarte a alcanzar tu máximo potencial.</p>

          <NavHashLink to="/home#about" className='btn-contact btn-contact-dark hidden'>Sobre Nosotros</NavHashLink>
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