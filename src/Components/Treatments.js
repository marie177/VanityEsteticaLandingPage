import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsItem from './TreatmentsItem';

const Treatments = () => {
    return (
    <div className='services-container' id='treatments'>
        <div className='services-banner'>
        <h2 className='services-title'>TRATAMIENTOS</h2>
        <p className='services-description'>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>
        </div>


        <TreatmentsItem/>
         <TreatmentsItem/> 
    </div>
    )
}

export default Treatments