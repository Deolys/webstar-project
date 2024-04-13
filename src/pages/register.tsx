import React, { useState, useEffect } from "react";

import css_style from '../styles/login-in-styles.css';
import scss_style from '../styles/login-in.scss'
//cannot find module but 'go to definition' works

import blue_ellipse from '../assets/icons/blue-ellipse.svg'
import orange_ellipse from '../assets/icons/orange-ellipse.svg'
import calendar_img from '../assets/images/png-transparent-calendar-feather-icon 2.png'
import opened_eye from '../assets/images/clarity-eye-show-solid.png'
import closed_eye from '../assets/images/bi-eye-slash.png'

// Burger code???

const Regiter = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    };

    return(
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Регистрация</title>
            <link rel="stylesheet" href={css_style}/>
            <link rel="stylesheet" href={scss_style}/>
<div className="wrapper">
    <div>
        <img 
        src={blue_ellipse} 
        id="spot1"/>
    </div>
    <div>
        <img 
        src={orange_ellipse} 
        id="spot2"/>
    </div>
    <div id="box-50">
        <form>
            <div id="page-name">
                <span className="greencolor">Дом </span> 
                <span className="whitecolor">/ Регистрация</span>
            </div>
            <div id="Enter">
                <span className="whitecolor">Регистрация</span>
            </div>
            <div id="Tip1">
                <span className="greycolor">Зарегистрируйтесь, чтобы присоединиться к WebStar</span>
            </div>
            <p>
                <div id="login-label">
                    <label className="whitecolor">Логин</label>
                </div>  
                {/* <!-- ошибка закралась куда-то в классы div className="password" --> */}
                <div> 
                    <input className="text-field__input"
                    type="text" 
                    name="login"
                    id="login-box"
                    placeholder="Введите логин" required
                    value="Ivan123"/>
                </div>
            </p>
            <p>
                <div id="email-label">
                    <label className="whitecolor">Email</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="email"
                    id="email-box"
                    placeholder="Введите email" required
                    value="Ivan123@gmail.com"/>
                </div>
            </p>
            <p>
                <div id="enter_passw_label">
                    <label className="whitecolor">Пароль</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="password"
                    id="enter-passw-box"
                    placeholder="Введите пароль" required
                    value="1gE_!jh3e@"/>
                </div>
            </p>
            <p>
                <div id="accept-passw-label">
                    <label className="whitecolor">Повторите пароль</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="password"
                    id="accept-passw-box"
                    placeholder="Повторите пароль" required
                    value="1gE_!jh3e@"/>
                </div>
            </p>       
            <p><button type="submit" className="enter-button"
                id="box4">Далее 50%</button>
            </p>
        </form>
    </div>
    <div id="box-100">
        <form>
            <div id="page-name">
                <span className="greencolor">Дом </span> 
                <span className="whitecolor">/ Регистрация</span>
            </div>
            <div id="Enter">
                <span className="whitecolor">Регистрация</span>
            </div>
            <div id="Tip1">
                <span className="greycolor">Зарегистрируйтесь, чтобы присоединиться к WebStar</span>
            </div>
            <p>
                <div id="name-label">
                    <label className="whitecolor">Имя</label>
                </div>  
                <div> 
                    <input className="text-field__input"
                    type="text" 
                    name="name"
                    id="name-box"
                    placeholder="Введите имя" required
                    value="Иван"/>
                </div>
            </p>
            <p>
                <div id="surname-label">
                    <label className="whitecolor">Фамилия</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="surname"
                    id="surname-box"
                    placeholder="Введите фамилию" required
                    value="Иванов"/>
                </div>
            </p>
            <p>
                <div id="phone-label">
                    <label className="whitecolor">Телефон</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="phone"
                    id="phone-box"
                    placeholder="Введите телефон" required
                    value="+79123456789"/>
                </div>
            </p>
            <p>
                <div id="birthdate-label">
                    <label className="whitecolor">Дата рождения</label>
                </div>
                <div>
                    <input className="text-field__input"
                    type="text" 
                    name="birthdate"
                    id="birthdate-box"
                    placeholder="Введите дату рождения" required
                    value="01/01/1980"/>
                    <img 
                    src={calendar_img}
                    id="date-button"/>
                </div>
            </p>
            <p>
                <div id="address-label">
                    <label className="whitecolor">Адрес</label>
                </div>
                <div id="address-div">
                    <input className="text-field__input"
                    type="text" 
                    name="address"
                    id="address-box"
                    placeholder="Введите страну" required
                    value="Россия"/>
                </div>
            </p> 
            <p>
                {/* <!-- ошибка закралась куда-то в style= --> */}
                <div style={"width: 243px; margin-left: 400px; margin-top: -35px;"}>
                    <input id="radio-button1" type="radio" name="radio" value="1" checked/>
                    <input id="radio-button2" type="radio" name="radio" value="2" checked/>
                    <label className="whitecolor" style={"margin-left: -110px;"}>Муж</label>
                    <label className="whitecolor" style={"margin-left: 70px;"} >Жен</label>
            </p>       
            <p><button type="submit" className="enter_button"
                id="box4">Ура — зарегистрироваться</button>
            </p>
        </form>
    </div>
</div>
</head>)}

export default Regiter;