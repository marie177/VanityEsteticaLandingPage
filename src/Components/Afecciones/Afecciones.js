import React from 'react'
import AfeccionesCarrousel from './AfeccionesCarrousel/AfeccionesCarrousel'
import AfeccionesFaciales from '../../json/afeccionesFaciales.json'
import AfeccionesCorporales from '../../json/afeccionesCorporales.json'

const Afecciones = () => {
    return (
        <>
            <div className='afecciones-container'>
                <h2 className='afecciones-title-container'> ¿Qué te interesa tratar hoy?</h2>
                <AfeccionesCarrousel afecciones={AfeccionesFaciales} categoria={"Faciales"} />
                <AfeccionesCarrousel afecciones={AfeccionesCorporales} categoria={"Corporales"} />
            </div>

            <div className='message--container'>
                <p className='message'> Conseguí cambios increíbles.</p>
                <a href='#contact' className='btn-contact btn-contact-dark'>Contactanos</a>
            </div>
        </>
    )
}

export default Afecciones