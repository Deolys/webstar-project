import React from "react";

import buttonArrow from '../assets/icons/triangle-right.svg';
import './workerCardStyles/SliderBtnStyle.css';

export default function SliderBtn({direction, bindAction}) {
    return (
        <button className={direction === "right" ? "arrow-button right" : "arrow-button"} 
        title={direction === "right" ? "Следующее изображение" : "Предыдущее изображение"}
        onClick={bindAction}>
            <img src = {buttonArrow} alt={direction === "right"? "Правая кнопка слайдера" : "Левая кнопка слайдера"}/>
        </button>
        
    );
}
