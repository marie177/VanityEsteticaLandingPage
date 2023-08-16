import React from 'react'
import BackgroundImage from '../Assets/images/Equipo_Vanity_1.jpg'

const About = () => {
    return (
    <div className='about-container' id='about'>
        <div className='about-background-image'>
            <img src={BackgroundImage} alt=""/>
        </div>

        <div className='about-presentation'>
            
            <h2 className='about-title'>SOBRE VANITY</h2>
            
            <p className='about-paragraph'>
                Vanity Estética reúne a un equipo de profesionales altamente capacitados, contamos también con tecnología avanzada aplicada a la resolución o tratamientos de patologías corporales estéticas y cosmetológicas.
            </p>

            <p className='about-paragraph'>
                Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros. Contamos con láseres de fotorejuvenecimiento para eliminar manchas, melasmas, pigmentaciones, cerrar poros, eliminar telangestacias y recuperar la salud de tu piel.
                
            </p>

            <button className='btn-contact'>CONTACTANOS!</button>
        </div>
    </div>
    )
}

export default About