import React, { useEffect, useState } from 'react'
import '../afecciones.css'

const AfeccionesCarrouselItem = ({ imagen, nombre, tratamientos, categoria,  setOpenPopUp,setDataPopUp }) => {

  const handleOpenPopUp = () => {
    setOpenPopUp(true);
    setDataPopUp({
      nombreAfeccion: nombre,
      categoria: categoria,
      tratamientos: tratamientos
    });
  }

  return (
    <div>
      <div className='afecciones-carrousel--item' onClick={() => handleOpenPopUp()}>
        <img alt="afeccion" src={process.env.PUBLIC_URL + imagen} />
        <h3>{nombre}</h3>
      </div>
    </div>
  )
}

export default AfeccionesCarrouselItem