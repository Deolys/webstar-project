import React, {useState} from "react";

import SliderBtn from './SliderBtn.jsx';
import UploadBtn from './UploadBtn.jsx';

import './workerCardStyles/SliderStyle.css';

export default function Slider({sliderData, isEditing}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const rightSlide = () => {
        if(slideIndex !== sliderData.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === sliderData.length){
            setSlideIndex(1)
        }
    }

    const leftSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(sliderData.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="slider">
            <SliderBtn direction={"left"} bindAction={leftSlide} alt="Предыдущее изображение"/>
            <ul>
                {sliderData.map((item, index) => {return (
                       <li key={index} className={slideIndex === index + 1 ? "active" : ""}>
                           <img src={item.image} alt="Изображение на слайдере"/>
                       </li>
                   )
                })}
                {isEditing && <UploadBtn />}
            </ul>
            <SliderBtn direction={"right"} bindAction={rightSlide} alt="Следующее изображение"/>
            <div className="pagination-dots" onClick={() => moveDot(index + 1)}>
                    {Array.from({length: sliderData.length}).map((_, index) => (
                    <div key={index} className={slideIndex === index + 1 ? "dot active" : "dot"}>
                    </div>
                ))}
            </div>
        </div>
    );
}