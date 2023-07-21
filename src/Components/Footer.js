import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer'>
            <NavHashLink to="/VanityEsteticaLandingPage#home" className='footer-logo'>            <span className='icon-estetica'></span>
                <h3>Vanity Estética</h3>
            </NavHashLink>

            <div>
                <ul className='sections-list'>
                    <li><NavHashLink to="/VanityEsteticaLandingPage#home">Inicio</NavHashLink></li>
                    <li><NavHashLink to="/VanityEsteticaLandingPage#about">Nosotros</NavHashLink></li>
                    <li><NavHashLink to="/VanityEsteticaLandingPage#treatments">Tratamientos</NavHashLink></li>
                    <li><NavHashLink to="/VanityEsteticaLandingPage#contact">Contacto</NavHashLink></li>
                </ul>
            </div>

            <div>
                <a href='https://www.instagram.com/vanity.estetica_ok/' target='_blank'><span className='icon-instagram'></span></a>
                <a href="https://wa.me/+5491167917230" target='_blank'><span className='icon-whatsapp'></span></a>
            </div>
        </div>
    )
}

export default Footer