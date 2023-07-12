import React from 'react'
import MisionImage from '../Assets/MisionImage.png'
import VisionImage from '../Assets/VisionImage.png'

const BannerMisionVision = () => {
    return (
        <div className='banner-container'>
            <div className='box-item'>
                <img src={MisionImage} alt="mision-image" />
                <h2>MISIÓN</h2>
                <p>Buscamos crear consciencia colectiva en la importacia del cuidado propio, brindando atención y asesorías de calidad a nuestros clientes para satisfacer todas sus necesidades y expectativas.</p>
            </div>
            <div className='box-item'>
                <img src={VisionImage} alt="vision-image" />
                <h2>VISIÓN</h2>
                <p>
                    Nuestra visión es destacar en el sector por la innovación tecnológica en estética, la satisfacción en nuestra comunidad y nuestro compromiso como profesionales en la industria.
                </p>
            </div>
        </div>
    )
}

export default BannerMisionVision