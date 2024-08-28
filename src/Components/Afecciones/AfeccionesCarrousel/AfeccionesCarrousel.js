import React, { useState, useRef } from 'react'
import AfeccionesCarrouselItem from './AfeccionesCarrouselItem'
import AfeccionesTratamientosPopUp from '../../PopUp/AfeccionesTratamientosPopUp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const AfeccionesCarrousel = ({ afecciones, categoria }) => {

    const [openPopUp, setOpenPopUp] = useState(false);
    const [dataPopUp, setDataPopUp] = useState({
        nombreAfeccion: '',
        categoria: '',
        tratamientos: [{}]
    });


    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    765: {
                        slidesPerView: 2.2,
                        spaceBetween: 40,
                    },
                    920: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[Navigation, Autoplay]}
                className='afecciones-carrousel'>
                {afecciones.map((afecciones, index) => {
                    return (
                        <SwiperSlide key={index}><AfeccionesCarrouselItem imagen={afecciones.imagen} nombre={afecciones.nombre} tratamientos={afecciones.tratamientos} categoria={categoria} setOpenPopUp={setOpenPopUp} setDataPopUp={setDataPopUp}/></SwiperSlide>)
                })}
            </Swiper>

            {
                openPopUp ? <AfeccionesTratamientosPopUp openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} nombreAfeccion={dataPopUp.nombreAfeccion} categoria={dataPopUp.categoria} tratamientos={dataPopUp.tratamientos} /> : null
            }
        </>
    )
}

export default AfeccionesCarrousel