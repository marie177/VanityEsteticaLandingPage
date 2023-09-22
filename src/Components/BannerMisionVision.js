import React from 'react'
import MisionImage from '../Assets/MisionImage.png'
import VisionImage from '../Assets/VisionImage.png'

const BannerMisionVision = () => {
    return (
        <div className='banner-container'>
            <div className='box-item'>
                <img src={MisionImage} alt="mision-image" />
                <h2>MISIÓN</h2>
                <p>Crear consciencia colectiva en la importancia del cuidado propio, brindando atención y asesorías de calidad a nuestros clientes para satisfacer todas sus necesidades y expectativas.</p>
            </div>
            <div className='box-item'>
                <img src={VisionImage} alt="vision-image" />
                <h2>VISIÓN</h2>
                <p>
                    Destacar en el sector gracias a la innovacion en estetica, la satisfacción en nuestros pacientes y nuestro compromiso como profesionales.
                </p>
            </div>
        </div>
    )
}

export default BannerMisionVision