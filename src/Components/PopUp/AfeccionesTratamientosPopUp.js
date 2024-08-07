import React from 'react'
import './popUp.css'
import { NavHashLink } from 'react-router-hash-link';

const AfeccionesTratamientosPopUp = ({ openPopUp, setOpenPopUp, nombreAfeccion,tratamientos, categoria}) => {

    return (
        openPopUp ?
            <div className='popUp-container'>
                <div className='popUp popUpAfeccionesTratamientos'>
                    <div>
                        <h3 className='popUpAfeccionesTratamientos-title'>
                            Los tratamientos que te pueden ayudar a tratar <strong>{nombreAfeccion}</strong> son:
                        </h3>

                        <div className='popUpAfeccionesTratamientos-content'>
                            {
                                tratamientos.map((tratamiento, index) => {
                                    console.log(tratamiento)
                                    return (
                                        <NavHashLink  to={"/treatments/" + categoria + "#" + tratamiento.nombre.replace(/ /g, '-')} className='tratamiento' key={index}>
                                            <img alt='tratamiento ' src={process.env.PUBLIC_URL + tratamiento.imagen} />
                                            <h4>{tratamiento.nombre}
                                            </h4>
                                        </NavHashLink>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <a href="https://wa.me/+5491167917230" target="_blank" className='btn-turno'> Quiero un turno! </a>
                </div>
            </div> : null
    )
}

export default AfeccionesTratamientosPopUp