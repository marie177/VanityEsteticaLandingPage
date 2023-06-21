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
            <img className='nav-logo-container' src={Logo} alt=''/>

        <div className='navbar-links-container'>
            <a href="">Inicio</a>
            <a href="">Nosotros</a>
            <a href="">Tratamientos</a>
            <a href="">Contacto</a>
        </div>
      
    </nav>
  );
}

export default Navbar