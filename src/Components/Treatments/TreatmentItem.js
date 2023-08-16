import React from 'react'
import BackgroundImage from '../../Assets/AboutImage.jpg'
import TreatmentListContent from './TreatmentListContent';
import TreatmentSlider from '../Sliders/TreatmentSlider';

const TreatmentItem = (props) => {
  return (
    <article className='treatment-item' id={props.tratamiento.title.replace(/ /g, '-')}>
      <TreatmentSlider arrayImages={props.tratamiento.images}/>

      <div className='treatment-item-content'>
        <h2>{props.tratamiento.title}</h2>
          {props.tratamiento.contents.sort((a, b) => a.position > b.position ? 1 : -1).map(item => (
            <p>{Array.isArray(item.content) ?  <TreatmentListContent arrayList={item.content}/> : item.content}</p>
          ))}   
      </div>
    </article>
  )
}

export default TreatmentItem