import React from "react";

import buttonArrow from '../../assets/icons/triangle-right.svg';
import {ArrowButton} from './slider-btn.styled';

export default function SliderBtn({isRight, bindAction}) {
    return (
        <ArrowButton isRight={isRight} 
        title={isRight ? "Следующее изображение" : "Предыдущее изображение"}
        onClick={bindAction}>
            <img src = {buttonArrow} alt={isRight ? "Правая кнопка слайдера" : "Левая кнопка слайдера"}/>
        </ArrowButton>
    );
}
