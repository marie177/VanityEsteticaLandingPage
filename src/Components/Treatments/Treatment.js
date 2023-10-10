import React from 'react'
import './Treatments.css'
import './TreatmentsMobile.css'
import './TreatmentsTablet.css'
import '../Contact/Contact.css'
import TreatmentCategory from './TreatmentCategory'
import { useParams, NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link';
const Treatment = () => {
  const { treatmentCategory } = useParams();

  return (
    <div className='treatments-container' id='treatments'>
      <div className='treatments-banner'>
        <h2 className='treatments-title'>TRATAMIENTOS</h2>
        <p className='treatments-description'>Nuestros tratamientos están diseñados para eliminar celulitis, flacidez, adiposidad localizada, tonificar músculo, moldear la figura corporal, entre otros.</p>
      </div>

      <div className='treatments-list-container'>
        <div className='treatments-types-button'>
          <NavLink exact="true" to="/treatments/Corporales" className='link' activeClassName="active-link">CORPORALES</NavLink>
          <NavLink exact="true" to="/treatments/Faciales" className='link' activeClassName="active-link">FACIALES</NavLink>
          <NavLink exact="true" to="/treatments/Cosmetologicos" className='link' activeClassName="active-link">COSMETOLÓGICOS</NavLink>
          <NavLink exact="true" to="/treatments/Belleza_de_ojos" className='link' activeClassName="active-link">BELLEZA DE OJOS</NavLink>
          <NavLink exact="true" to="/treatments/Masajes" className='link' activeClassName="active-link">MASAJES</NavLink>
        </div>

        <TreatmentCategory treatmentCategory={treatmentCategory} />
      </div>

      <div className='column'>

      <NavHashLink to="/home#home" className='btn-volver btn-submit-form'> 
      <span className='contact-btn-submit-icon'></span>
          Volver atrás
      </NavHashLink>
      </div>
      
    </div>
  )
}

export default Treatment