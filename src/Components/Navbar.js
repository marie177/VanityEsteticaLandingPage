import React, { useState } from 'react';
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

    const [openMenu, setOpenMenu] = useState(false);
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
        <nav>
            <NavHashLink to="/VanityEsteticaLandingPage#home"> <img className='nav-logo-container' src={Logo} alt='' /></NavHashLink>

            <div className='navbar-links-container'>
                {/* <NavHashLink to="/#home">Inicio</NavHashLink>
            <NavHashLink to="/#about">Nosotros</NavHashLink>
            <NavHashLink to="/#treatments">Tratamientos</NavHashLink>
            <NavHashLink to="/#contact">Contacto</NavHashLink> */}

                <NavHashLink to="/VanityEsteticaLandingPage#home">Inicio</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#about">Nosotros</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#treatments">Tratamientos</NavHashLink>
                <NavHashLink to="/VanityEsteticaLandingPage#contact">Contacto</NavHashLink>
            </div>

        </nav>
    );
}

export default Navbar