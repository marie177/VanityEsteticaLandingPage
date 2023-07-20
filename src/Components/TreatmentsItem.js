import React from 'react'
import BackgroundImage from '../Assets/AboutImage.jpg'
import TreatmentsCarrousel from './TreatmentsCarrousel/TreatmentsCarrousel'
import { Navigate } from 'react-router-dom';

const TreatmentsItem = (props) => {
    const [goToTreatments, setGoToTreatments] = React.useState(false);

    if(goToTreatments){
      let path = "/treatments/"+props.treatmentCategory;
      return  <Navigate to={path} />;
    }
    return (
        <div className='overflow-h'>
            <div className='treatments-item-container overflow-h'>
                <div className='item-container'>
                    <h2 className='title-item-container'>{props.treatmentCategory}</h2>
                    <p className='description-item-container'>Brindamos a nuestros pacientes una amplia variedad de tratamientos dedicados al cuidado de la salud y la Belleza.</p>

                    <button className='btn-contact' onClick={() => {setGoToTreatments(true);}}>VER TODOS</button>
                </div>

               <TreatmentsCarrousel/>
            </div>
        </div>
    )
}

export default TreatmentsItem