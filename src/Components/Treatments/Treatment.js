import React from 'react'
import './Treatments.css'
import './TreatmentsMobile.css'
import './TreatmentsTablet.css'
import TreatmentCategory from './TreatmentCategory'
import { useParams, NavLink } from 'react-router-dom'
const Treatment = () => {
  const {treatmentCategory} = useParams();
  // let elementActive = document.getElementById("#"+treatmentCategory);
  // console.log("#"+treatmentCategory);
  // console.log(elementActive);
  // const activeClass ="active";
  // elementActive.classList.add(activeClass);

  return (
    <div className='treatments-container' id='treatments'>
      <div className='treatments-banner'>
        <h2 className='treatments-title'>TRATAMIENTOS</h2>
        <p className='treatments-description'>Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros.</p>
      </div>

      <div className='treatments-list-container'>
        <div className='treatments-types-button'>
          <NavLink exact to="/VanityEsteticaLandingPage/treatments/Corporales" className='link' activeClassName="active-link">CORPORALES</NavLink>
          <NavLink exact to="/VanityEsteticaLandingPage/treatments/Faciales" className='link' activeClassName="active-link">FACIALES</NavLink>
          <NavLink exact to="/VanityEsteticaLandingPage/treatments/Cosmetologicos" className='link' activeClassName="active-link">COSMETOLÓGICOS</NavLink>
          <NavLink exact to="/VanityEsteticaLandingPage/treatments/Belleza_de_ojos" className='link' activeClassName="active-link">BELLEZA DE OJOS</NavLink>
          <NavLink exact to="/VanityEsteticaLandingPage/treatments/Masajes" className='link' activeClassName="active-link">MASAJES</NavLink>
        </div>

        <TreatmentCategory treatmentCategory={treatmentCategory}/>
      </div>
    </div>
  )
}

export default Treatment