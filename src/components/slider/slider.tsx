import React, {useState, useRef, useEffect} from "react";

import {SliderBtn} from '../slider-btn';
import {UploadBtn} from '../upload-btn';
import {DeleteBtn} from "../delete-btn";

import {StyledSlider, PaginationDots, Dot, DeleteSlideBtn, SliderUl, SliderLi, SliderInput} from './slider.styled';

export default function Slider({sliderData, isEditing}) {
    const [slides, setSlides] = useState(sliderData || []);
    const [slideIndex, setSlideIndex] = useState(0)
    const [url, setUrl] = useState(null);
    const [isSliderFull, setIsSliderFull] = useState(false);

    const rightSlide = () => {
        setSlideIndex((slideIndex + 1)%slides.length);
    }

    const leftSlide = () => {
        setSlideIndex((slideIndex + slides.length - 1)%slides.length);
    }

    const removeSlide = () => {
        const newSlides = [...slides];
        newSlides.splice(slideIndex, 1);
        setSlides(newSlides);
        setSlideIndex((slideIndex + newSlides.length - 1)%newSlides.length);
    };

    useEffect(() => {
        if (url) {
           const newSlides = [...slides];
           newSlides.push({image:url});
           setSlides(newSlides);
           setUrl(null);
       }
    }, [url]);
    
    useEffect(() => {
        if(slides.length >= 10)
            setIsSliderFull(true);
        else
            setIsSliderFull(false);
    }, [slides]);

    const imgInputRef=useRef(null);

    const handleUrlChange = (event) =>{
        setUrl(URL.createObjectURL(event.target.files[0]));
      }

    return (
        <StyledSlider>
            <SliderBtn isRight={false} bindAction={leftSlide}/>
            <SliderUl>
                {slides.map((item, index) => {return (
                       <SliderLi key={index} className={slideIndex === index ? 'active' : ''}>
                           <img src={item.image} alt="Изображение на слайдере"/>
                       </SliderLi>
                   )
                })}
                <SliderInput ref={imgInputRef} onChange={handleUrlChange} type="file" accept="image"/>
                {isEditing && !isSliderFull && <UploadBtn bindAction={() => imgInputRef.current.click()}/>} 
                {isEditing && 
                <DeleteSlideBtn title='Удалить изображение'>
                    <DeleteBtn bindAction={removeSlide}/>
                </DeleteSlideBtn>}
            </SliderUl>
            <SliderBtn isRight={true} bindAction={rightSlide}/>
            <PaginationDots>
                    {Array.from({length: slides.length}).map((_, index) => (
                    <Dot key={index} isActive={slideIndex === index}>
                    </Dot>
                ))}
            </PaginationDots>
        </StyledSlider>
    );
}
