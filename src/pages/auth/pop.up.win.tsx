import React from 'react';

const PageName = () => {
    return (
        <div id="page-name">
            <span className="greencolor">Дом </span> 
            <span className="whitecolor">/ Регистрация</span>
            <CloseButton />
        </div>
    );
};

const CloseButton = () => {
    return (
        <button id="x-close-button">
            <img src="x-close-green.png" alt="Close button" />
        </button>
    );
};

const ChooseRole = () => {
    return (
        <div id="Choose-role">
            <span className="whitecolor">Выберите роль</span>
        </div>
    );
};

const RadioButtons = () => {
    return (
        <div>
            <input id="radio-button1" type="radio" name="radio" value="1" checked/>
            <input id="radio-button2" type="radio" name="radio" value="2" checked/>
        </div>
    )
}

const TextRadio: React.FC = () => {
    return (
        <div className="text-radio">
            <label style={{ marginLeft: '1vh', marginTop: '50px' }} htmlFor="radio-button1" className="whitecolor">Обычный</label>
            <label style={{ marginLeft: '8vh', marginBottom: '-50px' }} htmlFor="radio-button2" className="whitecolor">Админ</label>
        </div>
    );
};

const Submit10 = () => {
    return (
        <p><button type="submit" className="enter-button"
                id="box5">
                <span className="greencolor">
                    <a href="register.html"> Далее 10%</a>
                </span>
        </button></p>
    )
}

// Добавьте другие компоненты по аналогии с ChooseRole

const PopUpWinComponent = () => {
    return (
        <div id="pop-up-win">
            <form>
                <PageName />
                <ChooseRole />
                <RadioButtons />
                <TextRadio />
                <Submit10 />
            </form>
        </div>
    );
};

export default PopUpWinComponent;
