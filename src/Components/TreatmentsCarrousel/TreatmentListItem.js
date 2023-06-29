import React from 'react'
import BackgroundImage from '../../Assets/AboutImage.jpg'

const TreatmentListItem = () => {
    return (
        <div className='treatments-items-list'>
            <a href='https://github.com/' >
                <div className='item-list'>
                    <h2 className='treatment-name'>VENUS LEGACY</h2>
                    <img src={BackgroundImage} />
                </div>
            </a>
        </div>
    )
}

export default TreatmentListItem