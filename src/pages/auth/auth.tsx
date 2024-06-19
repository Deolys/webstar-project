import React, { useState, useContext } from "react";

import { FormInput } from '../../components/form-input';
import { Wrapper, BaseStyles, Form, FormLabel, FormTitle, FormSubTitle, ColoredText, FormButton, FormLink, PasswordDiv} from './auth.styled';

import { URLs } from "../../__data__/urls";
import { AuthContext } from "../../contexts/auth-context";
import { ErrorSign } from "../../components/error-sign";

interface contextUser {
  currentUser: {
    email: string;
    cardId: string;
  };
  setCurrentUser: React.Dispatch<React.SetStateAction<{ email: string, cardId: string }>>;
}

const Authentication = () => {
  const [passError, setPassError] = useState(false);
  const [errorPicture, setErrorPicture] = useState(false);
  const currentLocation = location.pathname.split('/').pop();
  const { setCurrentUser } = useContext<contextUser>(AuthContext)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    try {
      fetch(`${URLs.api.main}/login`, {
        method: 'POST',
        body: JSON.stringify({
          loginData: loginData
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((errorMessage) => {
              setErrorPicture(true);
              throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .then((data) => {
        setErrorPicture(false);
        setCurrentUser({email: data.email, cardId: data.cardId});
        location.replace(`${URLs.baseUrl}`);
      })
    } catch (error) {
      setErrorPicture(true);
      console.error('Error while logging in:', error);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if(registerData.password!== registerData.confirmPassword) {
      setPassError(true);
      return;
    }
    try {
      fetch(`${URLs.api.main}/register`, {
        method: 'POST',
        body: JSON.stringify({
          registerData: registerData
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((errorMessage) => {
              setErrorPicture(true);
              throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .then((data) => {
        setPassError(false);
        setErrorPicture(false);
        setCurrentUser({email: data.email, cardId: ""});
        location.replace(`${URLs.baseUrl}`);
      })
    } catch (error) {
      setErrorPicture(true);
      console.error('Error while registering:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (currentLocation === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else if (currentLocation === 'register') {
      setRegisterData({ ...registerData, [name]: value });
    }
    else if (currentLocation === 'recover') {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleRecoverSubmit = (e) => {
    e.preventDefault();
    if(registerData.password!== registerData.confirmPassword) {
      setPassError(true);
      return;
    }
    setPassError(false);
    setCurrentUser({email: registerData.email, cardId: ""});
    location.replace(`${URLs.baseUrl}`);
  }

  return(
    <BaseStyles>
      <main>
              <Wrapper>

              {currentLocation === 'login' && 
              <Form onSubmit={handleLoginSubmit}>
                  <FormTitle> 
                    <ColoredText color="#35C7AD"> Дом </ColoredText>
                      / Авторизация
                  </FormTitle>
                  <FormSubTitle>Вход</FormSubTitle>
                  <p><ColoredText color="#C3C3C3" 
                                  fontWeight="bold"
                                  fontSize="20px">Введите свой логин и пароль</ColoredText></p>
                  
                  <FormLabel marginTop="6px" marginBottom="6px">Логин</FormLabel>
                  
                  <FormInput type="email"
                  name="email"
                  placeholder="Введите email"
                  inputValue={loginData.email} onChange={handleInputChange}
                  />

                  <FormLabel marginTop="6px" marginBottom="6px" >Пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    name="password"
                    placeholder="Введите пароль"
                    inputValue={loginData.password} onChange={handleInputChange}/>
                    
                  </PasswordDiv>

                  <FormButton type="submit">Войти</FormButton>
                  {passError && <ErrorSign text="Неверный логин или пароль" />}

                  <ColoredText fontSize="24px">
                    Нет аккаунта? <FormLink href={URLs.ui.register}>Давайте создадим!</FormLink>
                  </ColoredText>
                  <ColoredText fontSize="24px">
                    Забыли пароль? <FormLink href={URLs.ui.recover}>Восстановить!</FormLink>
                  </ColoredText>
                </Form>}

                {currentLocation === 'register' && 
                <Form onSubmit={handleRegisterSubmit}>
                  <FormTitle> 
                    <ColoredText color="#35C7AD"> Дом </ColoredText>
                      / Регистрация
                  </FormTitle>
                  <FormSubTitle>Зарегистрироваться</FormSubTitle>
                  <p><ColoredText color="#C3C3C3" 
                                  fontWeight="bold"
                                  fontSize="20px">Зарегистрируйтесь, чтобы присоединиться к WebStar
                  </ColoredText></p>

                  <FormLabel marginTop="6px" marginBottom="6px">Имя</FormLabel>
                  <FormInput type="text"
                  name="name"
                  placeholder="Введите имя"
                  inputValue={registerData.name} onChange={handleInputChange}
                  />
                  
                  <FormLabel marginTop="6px" marginBottom="6px">Email</FormLabel>
                  
                  <FormInput type="email"
                  name="email"
                  placeholder="Введите email"
                  inputValue={registerData.email} onChange={handleInputChange}
                  />
                  

                  <FormLabel marginTop="6px" marginBottom="6px" >Пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    name="password"
                    placeholder="Введите пароль"
                    inputValue={registerData.password} onChange={handleInputChange}/>
                    
                  </PasswordDiv>
                  <FormLabel marginTop="6px" marginBottom="6px" >Повторите пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    name="confirmPassword"
                    placeholder="Введите пароль"
                    inputValue={registerData.confirmPassword} onChange={handleInputChange}/>
                    
                  </PasswordDiv>
                  {passError && <ErrorSign text="Пароли должны совпадать" />}
                  <FormButton type="submit" onSubmit={handleRegisterSubmit}>Зарегистрироваться</FormButton>

                  <ColoredText fontSize="24px">
                    Уже есть аккаунт? <FormLink href={URLs.ui.login}>Войти</FormLink>
                  </ColoredText>
                </Form>}

                {currentLocation === 'recover' && 
                <Form onSubmit={handleRecoverSubmit}>
                  <FormTitle> 
                    <ColoredText color="#35C7AD"> Дом </ColoredText>
                      / Восстановление пароля
                  </FormTitle>
                  <FormSubTitle>Восстановить пароль</FormSubTitle>
                  
                  <FormLabel marginTop="6px" marginBottom="6px">Email</FormLabel>
                  
                  <FormInput type="email"
                  name="email"
                  placeholder="Введите email"
                  inputValue={registerData.email} onChange={handleInputChange}
                  />
                  

                  <FormLabel marginTop="6px" marginBottom="6px" >Придумайте новый пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    name="password"
                    placeholder="Введите пароль"
                    inputValue={registerData.password} onChange={handleInputChange}/>
                    
                  </PasswordDiv>
                  <FormLabel marginTop="6px" marginBottom="6px" >Повторите пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    name="confirmPassword"
                    placeholder="Введите пароль"
                    inputValue={registerData.confirmPassword} onChange={handleInputChange}/>
                  </PasswordDiv>
                  
                  <FormButton type="submit" onSubmit={handleRecoverSubmit}>Установить новый пароль</FormButton>
                  {passError && <ErrorSign text="Пароли должны совпадать" />}
                  <ColoredText fontSize="24px">
                    Уже есть аккаунт? <FormLink href={URLs.ui.login}>Войти</FormLink>
                  </ColoredText>
                </Form>}
                {errorPicture && <ErrorSign text="Произошла ошибка. Попробуйте позже" />}
              </Wrapper>
          </main>
    </BaseStyles>
  );
}

export default Authentication;