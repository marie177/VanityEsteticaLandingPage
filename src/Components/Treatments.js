import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsItem from './TreatmentsItem';

const Treatments = () => {
    return (
    <div className='services-container' id='treatments'>
        <div className='services-banner'>
        <h2 className='services-title'>TRATAMIENTOS</h2>
        <p className='services-description'>Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros.</p>
        </div>


        <TreatmentsItem/>
         <TreatmentsItem/> 
    </div>
    )
}

export default Treatments