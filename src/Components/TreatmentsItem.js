import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentListItem from './TreatmentListItem'

const TreatmentsItem = () => {
    return (
        <div>
            <div className='treatments-item-container '>
                <div className='item-container'>
                    <h2 className='title-item-container'>FACIALES</h2>
                    <p className='description-item-container'>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>

                    <button className='btn-contact'>VER TODOS</button>
                </div>

                <TreatmentListItem/>
            </div>
        </div>
    )
}

export default TreatmentsItem