import React, { useState, useRef, useEffect } from "react";

import  { SliderBtn } from '../slider-btn';
import { UploadBtn } from '../upload-btn';
import { DeleteBtn } from "../delete-btn";
import { ImageInput } from "../image-input";

import { StyledSlider, PaginationDots, Dot, DeleteSlideBtn, SliderUl, SliderLi } from './slider.styled';

import { cardPreviews } from "../../assets/images";

export default function Slider({sliderImages, setSliderImages, isEditing}) {
    const [slides, setSlides] = useState(sliderImages);
    const [slideIndex, setSlideIndex] = useState(0)
    const [url, setUrl] = useState(null);
    const [isSliderFull, setIsSliderFull] = useState(false);

    const rightSlide = () => {
        setSlideIndex((slideIndex + 1)%sliderImages.length || 0);
    }

    const leftSlide = () => {
        setSlideIndex((slideIndex + sliderImages.length - 1)%sliderImages.length || 0);
    }

    const removeSlide = () => {
        const newSliderImages = sliderImages.filter((_, index) => index!== slideIndex);
        setSliderImages(newSliderImages);
        setSlideIndex(slideIndex-1 >=0 ? slideIndex-1 : 0);
    };

    useEffect(() => {
        if (cardPreviews && Object.keys(cardPreviews).length > 0) {
            const updatedSliderImages = sliderImages.map(imgKey => cardPreviews[imgKey] || imgKey);
            setSlides(updatedSliderImages);
        }
        if(sliderImages&&slideIndex>=sliderImages.length) {
            setSlideIndex(0)
        }
    }, [sliderImages, cardPreviews, setSliderImages]);

    useEffect(() => {
        if (url) {
            setSliderImages([...sliderImages, url]);
            setUrl(null);
        }
    }, [url]);
    
    useEffect(() => {
        if(sliderImages.length >= 10)
            setIsSliderFull(true);
        else
            setIsSliderFull(false);
    }, [sliderImages]);

    const imgInputRef=useRef(null);

    const handleUrlChange = (event) =>{
        setUrl(URL.createObjectURL(event.target.files[0]));
        imgInputRef.current.value = '';
      }

    return (
        <StyledSlider>
            <SliderBtn isRight={false} bindAction={leftSlide}/>
            <SliderUl>
                {slides.map((item, index) => {return (
                       <SliderLi key={index} className={slideIndex === index ? 'active' : ''}>
                           <img src={item} alt="Изображение на слайдере"/>
                       </SliderLi>
                   )
                })}
                <ImageInput reference={imgInputRef} onChange={handleUrlChange}/>
                {isEditing && !isSliderFull && <UploadBtn bindAction={() => imgInputRef.current.click()}/>} 
                {isEditing && sliderImages.length>0 && 
                <DeleteSlideBtn title='Удалить изображение'>
                    <DeleteBtn bindAction={removeSlide}/>
                </DeleteSlideBtn>}
            </SliderUl>
            <SliderBtn isRight={true} bindAction={rightSlide}/>
            <PaginationDots>
                    {Array.from({length: sliderImages.length}).map((_, index) => (
                    <Dot key={index} isActive={slideIndex === index}>
                    </Dot>
                ))}
            </PaginationDots>
        </StyledSlider>
    );
}
