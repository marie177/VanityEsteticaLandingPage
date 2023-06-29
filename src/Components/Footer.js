import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <a href='#home' className='footer-logo'>
            <span className='icon-estetica'></span>
            <h3>Vanity Estética</h3>
        </a>

        <div>
            <ul className='sections-list'>
                <li><a href='#home'> Inicio </a></li>
                <li><a href="#about"> Nosotros </a></li>
                <li><a href="#treatments"> Tratamientos </a></li>
                <li><a href="#contact"> Contacto </a></li>
            </ul>
        </div>

        <div>
            <a href='https://www.instagram.com/vanity.estetica_ok/' target='_blank'><span className='icon-instagram'></span></a>
            <a href="#home" target='_blank'><span className='icon-whatsapp'></span></a>
        </div>
    </div>
  )
}

export default Footer