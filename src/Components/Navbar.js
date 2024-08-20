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
                        <li><NavHashLink to={"/treatments/Corporales#treatments"} >Corporales</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Faciales#treatments"}>Faciales</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Cosmetologicos#treatments"}>Cosmetológicos</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Belleza_de_ojos#treatments"}>Belleza de ojos</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Belleza_de_manos_pies#treatments"}>Belleza de manos pies</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Masajes#treatments"}>Masajes</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Nutricion#treatments"}>Nutrición</NavHashLink></li>
                        <li><NavHashLink to={"/treatments/Depilaciondefinitiva#treatments"}>Depilación definitiva</NavHashLink></li>
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