import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";
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
           <a  href="#home"> <img className='nav-logo-container' src={Logo} alt=''/></a>

        <div className='navbar-links-container'>
            <a href="#home">Inicio</a>
            <a href="#about">Nosotros</a>
            <a href="#treatments">Tratamientos</a>
            <a href="#contact">Contacto</a>
        </div>
      
    </nav>
  );
}

export default Navbar