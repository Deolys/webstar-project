import React, { useState, useEffect } from "react";

import css_style from '../styles/login-in-styles.css';
import scss_style from '../styles/login-in.scss'
//cannot find module but 'go to definition' works

import blue_ellipse from '../assets/icons/blue-ellipse.svg'
import orange_ellipse from '../assets/icons/orange-ellipse.svg'
import opened_eye from '../assets/images/clarity-eye-show-solid.png'
import closed_eye from '../assets/images/bi-eye-slash.png'

// Burger code???


const LoginIn = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    };
  
    return( <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/><meta/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Авторизация</title>
            <link rel="stylesheet" href={css_style}/>
            <link rel="stylesheet" href={scss_style}/>
           
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
            <div id="box">
                <form>
                    <div id="page-name">
                        <span className="greencolor">Дом </span> 
                        <span className="whitecolor">/ Авторизация</span>
                    </div>
                    <div id="Enter">
                        <span className="whitecolor">Вход</span>
                    </div>
                    <div id="Tip1">
                        <span className="greycolor">Введите свой логин и пароль</span>
                    </div>
                    <p>
                        <div id="login-label">
                            <label className="whitecolor">Логин</label>
                        </div>
                        <input 
                        className="text-field__input"
                        type="text" 
                        name="email"
                        id="box2"
                        placeholder="Введите логин" required
                        value="Login@test.ru"/>
                    </p>
                    <p>
                        <div id="pasw-label">
                            <label className="whitecolor">Пароль</label>
                        </div>
                        <div className="password">
                            <input className="text-field__input password_input"
                            type="text" 
                            name="password"
                            id="box3"
                            placeholder="Введите пароль" required
                            value="например: 1gE_!jh3e@"/>
                            <img // image type="image"
                            src={closed_eye}
                            id="Eye_button"/>
                        </div>
                    </p>
                    <p><button type="submit" className="enter-button"
                        id="box4">Войти</button>
                    </p>
                    <div id="Tip2">
                        <span className="whitecolor">Нет аккаунта? </span>
                        <span className="greencolor">
                            <a href="register.html"> Давайте создадим!</a>
                        </span>
                    </div> 
                </form>
            </div> </head>)}

export default LoginIn;