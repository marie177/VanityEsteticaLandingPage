import React from 'react'
import MisionImage from '../Assets/MisionImage.png'
import VisionImage from '../Assets/VisionImage.png'

const BannerMisionVision = () => {
    return (
        <div className='banner-container'>
            <div className='box-item'>
                <img src={MisionImage} alt="mision-image" />
                <h2>MISIÓN</h2>
                <p>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>
            </div>
            <div className='box-item'>
                <img src={VisionImage} alt="vision-image" />
                <h2>VISIÓN</h2>
                <p>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>
            </div>
        </div>
    )
}

export default BannerMisionVision