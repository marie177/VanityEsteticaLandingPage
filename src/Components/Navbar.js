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
            <NavHashLink to="#home"> <img className='nav-logo-container' src={Logo} alt='' /></NavHashLink>

            <div className='navbar-links-container'>
                <NavHashLink to="#home" onClick={showNavbar}>Inicio</NavHashLink>
                <NavHashLink to="#about" onClick={showNavbar}>Nosotros</NavHashLink>
                <NavHashLink to="#treatments" onClick={showNavbar}>Tratamientos</NavHashLink>
                <NavHashLink to="#contact" onClick={showNavbar}>Contacto</NavHashLink>     

                <button className='navbar-btn navbar-close-btn' onClick={showNavbar}></button>         
            </div>
            <button className='navbar-btn navbar-menu-btn' onClick={showNavbar}></button>
        </nav>
    );
}

export default Navbar