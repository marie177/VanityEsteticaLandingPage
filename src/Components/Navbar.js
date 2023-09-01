import React, { useState, useRef } from 'react';
import Logo from "../Assets/Logo.png";
import { Link, Route } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";


export const Navbar = () => {

    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive-nav");
    }
    const menuOptions = [
        {
            text: "Inicio"
        },
        {
            text: "Nosotros"
        },
        {
            text: "Tratamientos"
        },
        {
            text: "Contacto"
        }
    ];

    return (
        <nav ref={navRef}>
            <NavHashLink to="/VanityEsteticaLandingPage#home"> <img className='nav-logo-container' src={Logo} alt='' /></NavHashLink>

            <div className='navbar-links-container'>
                <NavHashLink to="/VanityEsteticaLandingPage#home">Inicio</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#about">Nosotros</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#treatments">Tratamientos</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#contact">Contacto</NavHashLink>     

                <button className='navbar-btn navbar-close-btn' onClick={showNavbar}></button>         
            </div>
            <button className='navbar-btn navbar-menu-btn' onClick={showNavbar}></button>
        </nav>
    );
}

export default Navbar