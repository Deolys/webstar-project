// LoginForm.jsx
import React from 'react';

const PageName = () => {
    return (
        <div id="page-name">
            <span className="greencolor">Дом </span> 
            <span className="whitecolor">/ Авторизация</span>
        </div>
    );
};

const Enter = () => {
    return (
        <div id="Enter">
            <span className="whitecolor">Вход</span>
        </div>
    );
};

const Tip1 = () => {
    return (
        <div id="Tip1">
            <span className="greycolor">Введите свой логин и пароль</span>
        </div>
    );
};

// Добавьте другие компоненты по аналогии с Tip1

const LoginLabel = () => {
    return (
        <div id="login-label">
            <label className="whitecolor">Логин</label>
        </div>
    );
};

const LoginInput = () => {
    return (
        <input 
        className="text-field-input"
        type="text" 
        name="email"
        id="box2"
        placeholder="Введите логин" required
        value="Login@test.ru"/>
    )
}

const PasswordLabel = () => {
    return (
    <div id="pasw-label">
        <label className="whitecolor">Пароль</label>
    </div>
    )
}

const PasswordInput = () => {
    return (
    <div className="password">
        <input className="text-field-input password-input"
        type="text" 
        name="password"
        id="box3"
        placeholder="Введите пароль" required
        value="например: 1gE_!jh3e@"/>
        <img
        src="bi-eye-slash.png" 
        id="eye-button"/>
    </div>
    )
}

const EnterButton = () => {
    return (
   <button type="submit" className="enter-button"
                id="box4">Войти</button>
    )
}

const Tip2 = () => {
    return (
    <div id="Tip2">
        <span className="whitecolor">Нет аккаунта? </span>
        <span className="greencolor">
            <a href="#pop-up-win"> Давайте создадим!</a>
            {/*<a href="register.html"> Давайте создадим!</a> */}
        </span>
    </div> 
    )
}
  
const LoginFormComponent = () => {
    return (
        <div id="box">
            <form className="login-form">
                <PageName />
                <Enter />
                <Tip1 />
                <LoginLabel />
                <LoginInput />
                <PasswordLabel />
                <PasswordInput />
                <EnterButton />
                <Tip2 />
            </form>
        </div>
    );
};

export default LoginFormComponent;
