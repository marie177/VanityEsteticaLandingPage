import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'

const About = () => {
    return (
    <div className='about-container' id='about'>
        <div className='about-background-image'>
            <img src={BackgroundImage} alt=""/>
        </div>

        <div className='about-presentation'>
            
            <h2 className='about-title'>SOBRE VANITY</h2>
            
            <p className='about-paragraph'>
                Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.
            </p>

            <p className='about-paragraph'>
                Contamos con tecnología avanzada láser para el tratamiento de depilación efectiva y tratamientos de rejuvenecimiento y reparación como son la Mesoterapia Corporal, Facial y Capilar, Liporeducción, Peeling, Rellenos, Eliminación de Arrugas y Líneas de Expresión y asesoramiento Nutricional.
            </p>

            <button className='btn-contact'>CONTACTANOS!</button>
        </div>
    </div>
    )
}

export default About