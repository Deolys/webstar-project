import React, {useState} from "react";

import {SliderBtn} from '../slider-btn';
import {UploadBtn} from '../upload-btn';

import {StyledSlider, PaginationDots, Dot} from './slider.styled';

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
        <StyledSlider>
            <SliderBtn isRight={false} bindAction={leftSlide}/>
            <ul>
                {sliderData.map((item, index) => {return (
                       <li key={index} className={slideIndex === index + 1 ? 'active' : ''}>
                           <img src={item.image} alt="Изображение на слайдере"/>
                       </li>
                   )
                })}
                {isEditing && <UploadBtn />}
            </ul>
            <SliderBtn isRight={true} bindAction={rightSlide}/>
            <PaginationDots onClick={() => moveDot(slideIndex + 1)}>
                    {Array.from({length: sliderData.length}).map((_, index) => (
                    <Dot key={index} isActive={slideIndex === index + 1}>
                    </Dot>
                ))}
            </PaginationDots>
        </StyledSlider>
    );
}