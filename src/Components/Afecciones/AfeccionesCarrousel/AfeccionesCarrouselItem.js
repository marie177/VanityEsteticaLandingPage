import React, {useState} from 'react'
import '../afecciones.css'
import AfeccionesTratamientosPopUp from '../../PopUp/AfeccionesTratamientosPopUp'

const AfeccionesCarrouselItem = ({imagen, nombre, tratamientos, categoria}) => {

  const [openPopUp, setOpenPopUp] = useState(false);
  
  return (
    <div className='afecciones-carrousel--item' onClick={() => setOpenPopUp(true)}>
        <img alt="afeccion rosácea" src={process.env.PUBLIC_URL + imagen}/>
        <h3>{nombre}</h3>

        {
          openPopUp ? <AfeccionesTratamientosPopUp openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} nombreAfeccion={nombre} categoria={categoria} tratamientos={tratamientos}/> : null
        }
    </div>
  )
}

export default AfeccionesCarrouselItem