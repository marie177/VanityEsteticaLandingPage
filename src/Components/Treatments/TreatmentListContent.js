import React from 'react'

const TreatmentListContent = (props) => {
    return (
        <ul>
            {props.arrayList.map((itemList, index) => ( <li key={index}><span className='icon-li'></span><p>{itemList.li}</p></li>))}
        </ul>
    )
}

export default TreatmentListContent