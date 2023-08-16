import React from 'react'
import BackgroundImage from '../../Assets/AboutImage.jpg'
import { Navigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const TreatmentListItem = (props) => {
    let pathTest = "/VanityEsteticaLandingPage/treatments/" + props.treatmentCategory + "#"+props.tratamiento.replace(/ /g, '-');

    return (
        <div className='treatments-items-list'>
            <NavHashLink  to={pathTest}>
                <div className='item-list'>
                    <h2 className='treatment-name'>{props.tratamiento}</h2>
                    <img src={process.env.PUBLIC_URL + props.imagen} alt="test"/>
                </div>
            </NavHashLink>
        </div>
    )
}

export default TreatmentListItem