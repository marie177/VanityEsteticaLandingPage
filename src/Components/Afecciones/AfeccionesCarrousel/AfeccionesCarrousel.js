import React, { useState, useRef } from 'react'
import AfeccionesCarrouselItem from './AfeccionesCarrouselItem'

const AfeccionesCarrousel = ({ afecciones, categoria }) => {
    const carrouselRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - carrouselRef.current.offsetLeft);
        setScrollLeft(carrouselRef.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - carrouselRef.current.offsetLeft;
        // const walk = (x - startX) * 2;
        const walk = x - startX;
        carrouselRef.current.scrollLeft = scrollLeft - walk;
    }

    return (
        <div className='afecciones-carrousel' ref={carrouselRef} onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
            {afecciones.map((afecciones, index) => {
                return (<AfeccionesCarrouselItem key={index} imagen={afecciones.imagen} nombre={afecciones.nombre} tratamientos={afecciones.tratamientos} categoria={categoria} />)
            })}
        </div>
    )
}

export default AfeccionesCarrousel