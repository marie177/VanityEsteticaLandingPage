import React from 'react'
import TreatmentListItem from './TreatmentListItem'
import './TreatmentsCarrousel.css'

const TreatmentsCarrousel = () => {
    return (
        <div class="treatments-carrousel-container">
            <TreatmentListItem />
            <TreatmentListItem />
            <TreatmentListItem />
        </div>
    )
}

export default TreatmentsCarrousel