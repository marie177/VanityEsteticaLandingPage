import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsCarrousel from './TreatmentsCarrousel/TreatmentsCarrousel'

const TreatmentsItem = () => {
    return (
        <div className='overflow-h'>
            <div className='treatments-item-container overflow-h'>
                <div className='item-container'>
                    <h2 className='title-item-container'>FACIALES</h2>
                    <p className='description-item-container'>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>

                    <button className='btn-contact'>VER TODOS</button>
                </div>

               <TreatmentsCarrousel/>
            </div>
        </div>
    )
}

export default TreatmentsItem