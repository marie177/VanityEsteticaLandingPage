import React from 'react'
import BackgroundImage from '../../Assets/AboutImage.jpg'
import { Navigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const TreatmentListItem = (props) => {

    let path = "/treatments/" + props.treatmentCategory + "#"+props.tratamiento.replace(/ /g, '-');

    switch (props.treatmentCategory) {
        case "Cosmetológicos":
            path = "/treatments/Cosmetologicos#"+props.tratamiento.replace(/ /g, '-');
            break;
        case "Nutrición":
            path = "/treatments/Nutricion#"+props.tratamiento.replace(/ /g, '-');
            break;
        case "Depilación_definitiva":
            path = "/treatments/Depilaciondefinitiva#"+props.tratamiento.replace(/ /g, '-');
            break;
    }

    return (
        <div className='treatments-items-list'>
            <NavHashLink  to={path}>
                <div className='item-list'>
                    <h2 className='treatment-name'>{props.tratamiento}</h2>
                    <img src={process.env.PUBLIC_URL + props.imagen} alt="test"/>
                </div>
            </NavHashLink>
        </div>
    )
}

export default TreatmentListItem