import React from 'react'

import BackgroundImage from '../../Assets/AboutImage.jpg'

const TreatmentItem = (props) => {
  return (
    <article className='treatment-item'>
      <img src={BackgroundImage} />

      <div className='treatment-item-content'>
        <h2>{props.title}</h2>

        <p>
          {props.paragraph1}
        </p>

        <p>
          {props.paragraph2}
        </p>

        <p>
          {props.paragraph3}
        </p>

        <p>
          {props.paragraph4}
        </p>
      </div>
    </article>
  )
}

export default TreatmentItem