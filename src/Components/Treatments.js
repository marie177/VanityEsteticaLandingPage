import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsItem from './TreatmentsItem';

const Treatments = () => {
    return (
    <div className='services-container'>
        <div className='services-banner'>
        <h1 className='services-title'>TRATAMIENTOS</h1>
        <p className='services-description'>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>
        </div>

        <TreatmentsItem/>
        <TreatmentsItem/>
    </div>
    )
}

export default Treatments