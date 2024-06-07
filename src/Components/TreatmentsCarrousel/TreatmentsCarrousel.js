import React from 'react'
import TreatmentListItem from './TreatmentListItem'
import './TreatmentsCarrousel.css'
import TratamientosCorporales from '../../json/tratamientoscorporales.json'
import TratamientosFaciales from '../../json/tratamientosfaciales.json'
import TratamientosCosmetologicos from '../../json/tratamientoscosmetologicos.json'
import TratamientosBellezaDeOjos from '../../json/tratamientosbellezadeojos.json'
import TratamientosMasajes from '../../json/tratamientosmasajes.json'
import TratamientosBellezaManosPies from '../../json/tratamientosbellezamanosypies.json'
import TratamientosNutricion from '../../json/tratamientosnutricion.json'
import TratamientosDepilacionDefinitiva from '../../json/tratamientosdepilaciondefinitiva.json'
import BackgroundImage from '../../Assets/AboutImage.jpg'

const TreatmentsCarrousel = (props) => {
    let tratamientosArray = [];
    switch (props.treatmentCategory) {
        case "Corporales":
            tratamientosArray = TratamientosCorporales;
            break;
        case "Faciales":
            tratamientosArray = TratamientosFaciales;
            break;
        case "Cosmetológicos":
            tratamientosArray = TratamientosCosmetologicos;
            break;
        case "Belleza_de_ojos":
            tratamientosArray = TratamientosBellezaDeOjos;
            break;
        case "Masajes":
            tratamientosArray = TratamientosMasajes;
            break;
        case "Belleza_de_manos_pies":
            tratamientosArray = TratamientosBellezaManosPies;
            break;
        case "Nutrición":
            tratamientosArray = TratamientosNutricion;
            break;
        case "Depilación_definitiva":
            tratamientosArray = TratamientosDepilacionDefinitiva;
            break;
        default:
            break;

    }
    return (
        <div className="treatments-carrousel-container">
            {
                tratamientosArray.map(tratamiento => {
                    return (
                        <TreatmentListItem key={tratamiento.title} tratamiento={tratamiento.title} treatmentCategory={props.treatmentCategory} imagen={tratamiento.images[0].url} />
                    )
                })
            }
        </div>
    )
}

export default TreatmentsCarrousel