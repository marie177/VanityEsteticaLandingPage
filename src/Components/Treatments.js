import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsItem from './TreatmentsItem';

const Treatments = () => {
    return (
        <div className='treatments-container' id='treatments'>
            <div className='treatments-banner'>
                <h2 className='treatments-title'>TRATAMIENTOS</h2>
                <p className='treatments-description'>Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros.</p>
            </div>
            <TreatmentsItem treatmentCategory="Corporales"/>
            <TreatmentsItem treatmentCategory="Faciales"/>
            <TreatmentsItem treatmentCategory="Cosmetologicos"/>
            <TreatmentsItem treatmentCategory="Belleza_de_ojos"/>
            <TreatmentsItem treatmentCategory="Masajes"/>
        </div>
    )
}

export default Treatments