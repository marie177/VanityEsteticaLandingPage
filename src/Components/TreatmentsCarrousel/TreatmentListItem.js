import React from 'react'
import BackgroundImage from '../../Assets/AboutImage.jpg'
import { Link, Navigate } from 'react-router-dom';

const TreatmentListItem = () => {
    return (
        <div className='treatments-items-list'>
            <Link to="treatments">
                <div className='item-list'>
                    <h2 className='treatment-name'>VENUS LEGACY</h2>
                    <img src={BackgroundImage} />
                </div>
            </Link>
        </div>
    )
}

export default TreatmentListItem