import React, { useState, useRef } from 'react';
import Logo from "../Assets/Logo.png";
import { NavHashLink } from 'react-router-hash-link';

export const Navbar = () => {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }
    return (
        <nav ref={navRef}>
            <NavHashLink to="/home#home"> <img className='nav-logo-container' src={Logo} alt='' /></NavHashLink>

            <div className='navbar-links-container'>
                <NavHashLink to="/home#home" onClick={showNavbar}>Inicio</NavHashLink>
                <NavHashLink to="/home#about" onClick={showNavbar}>Nosotros</NavHashLink>
                <div className='dropdown-tratamientos--container'>
                    <NavHashLink to="/home#treatmentsList" onClick={showNavbar}>Tratamientos</NavHashLink>
                    <ul className='dropdown-tratamientos'>
                        <li><a>Corporales</a></li>
                        <li>Faciales</li>
                        <li>Cosmetológicos</li>
                        <li>Belleza de ojos</li>
                        <li>Belleza de manos pies</li>
                        <li>Masajes</li>
                        <li>Nutrición</li>
                        <li>Depilación definitiva</li>
                    </ul>
                </div>

                <NavHashLink to="/home#contact" onClick={showNavbar}>Contacto</NavHashLink>

                <button className='navbar-btn navbar-close-btn' onClick={showNavbar}></button>
            </div>
            <button className='navbar-btn navbar-menu-btn' onClick={showNavbar}></button>
        </nav>
    );
}

export default Navbar