import { LocalConvenienceStoreOutlined } from '@mui/icons-material';
import React, { useState, useRef } from 'react'
import UseState from 'react'
import { useEffect } from 'react';

const TreatmentSlider = (props) => {

    const slider = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    //const [autoPlay, setAutoPlay] = useState(1);
    const [autoPlay, setAutoPlay] = useState(0);

    useEffect(() => {
        if(autoPlay){
            const interval = setInterval(() => {
                selectNewImage(false, props.arrayImages);
            }, 2000)

            return () => clearInterval(interval);
        }
    });

    const selectNewImage = (btnTrigger = false, images, next = true) => {
        console.log(autoPlay)       
        if(btnTrigger) {
            setAutoPlay(0);
        }
        setTimeout(() => {
            try{
            const sliderSize = (props.arrayImages.length - 1) * slider.current.offsetWidth;

            if (next) {
                slider.current.scrollLeft = (slider.current.scrollLeft >= (sliderSize - 10)) ? 0 : (slider.current.scrollLeft + slider.current.offsetWidth);
            }
            else {
                slider.current.scrollLeft = (slider.current.scrollLeft == 0) ? slider.current.scrollLeft = sliderSize : (slider.current.scrollLeft - slider.current.offsetWidth);
            }
            }
            catch(e){
                console.log("entro al catch");
                return;
            }
        }, 500);   
    }

    const previous = () => {
        selectNewImage(true, props.arrayImages, false);
    }

    const next = () => {
        selectNewImage(true, props.arrayImages);
    }


    return (
        <div className='treatment-slider-container'>
            <div ref={slider} className='treatment-slider'>
                {props.arrayImages.map(imgtest => (<img src={process.env.PUBLIC_URL + imgtest.url} />))}
            </div>
            <div className='treatment-slider-buttons-container'>
                <button onClick={previous} className='btn-slider'><span>{'<'}</span></button>
                <button onClick={next} className='btn-slider'> <span>{'>'}</span></button>
            </div>
        </div>
    )
}

export default TreatmentSlider