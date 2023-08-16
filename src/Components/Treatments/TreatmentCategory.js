import React from 'react'
import TreatmentItem from './TreatmentItem'
import TratamientosCorporales from '../../json/tratamientoscorporales.json'
import TratamientosFaciales from '../../json/tratamientosfaciales.json'
import TratamientosCosmetologicos from '../../json/tratamientoscosmetologicos.json'
import TratamientosBellezaDeOjos from '../../json/tratamientosbellezadeojos.json'
import TratamientosMasajes from '../../json/tratamientosmasajes.json'

const TreatmentCategory = (props) => {
    let tratamientosArray = [];
    switch (props.treatmentCategory) {
        case "Corporales":
            tratamientosArray = TratamientosCorporales;
            break;
        case "Faciales":
            tratamientosArray = TratamientosFaciales;
            break;
        case "Cosmetologicos" || "Cosmetológicos":
            tratamientosArray = TratamientosCosmetologicos;
            break;
        case "Belleza_de_ojos":
            tratamientosArray = TratamientosBellezaDeOjos;
            break;
        case "Masajes":
            tratamientosArray = TratamientosMasajes;
            break;
        default:
            break;

    }
    return (
        <div>
            {
                tratamientosArray.map(tratamiento => {
                    return (
                        <TreatmentItem tratamiento={tratamiento} />
                    )
                })
            }

        </div>
    )
}

export default TreatmentCategory