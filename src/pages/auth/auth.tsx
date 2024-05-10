import React, { useState, useEffect } from "react";

import "../../styles/normalize.css";
import "../../styles/style.css";

import closedEye from "../../assets/images/bi-eye-slash.png";

import { FormInput } from '../../components/form-input';
import { Wrapper, BaseStyles, Form, FormLabel, FormTitle, FormSubTitle, ColoredText, FormButton, FormLink, EyeButton, PasswordDiv} from './auth.styled';


const Authentication = () => {
  return(
    <BaseStyles>
      <main>
              <Wrapper>

                <Form>
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
                  placeholder="Введите email"
                  />
                  

                  <FormLabel marginTop="6px" marginBottom="6px" >Пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    placeholder="Введите пароль"/>
                    <EyeButton>
                      <img src={closedEye}/>
                    </EyeButton>
                  </PasswordDiv>

                  <FormButton>Войти</FormButton>

                  <ColoredText fontSize="24px">
                    Нет аккаунта? <FormLink href="#">Давайте создадим!</FormLink>
                  </ColoredText>
                </Form>

                <Form>
                  <FormTitle> 
                    <ColoredText color="#35C7AD"> Дом </ColoredText>
                      / Регистрация
                  </FormTitle>
                  <FormSubTitle>Зарегистрироваться</FormSubTitle>
                  <p><ColoredText color="#C3C3C3" 
                                  fontWeight="bold"
                                  fontSize="20px">Зарегистрируйтесь, чтобы присоединиться к WebStar
                  </ColoredText></p>
                  
                  <FormLabel marginTop="6px" marginBottom="6px">Email</FormLabel>
                  
                  <FormInput type="email"
                  placeholder="Введите email"
                  />
                  

                  <FormLabel marginTop="6px" marginBottom="6px" >Пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    placeholder="Введите пароль"/>
                    <EyeButton>
                      <img src={closedEye}/>
                    </EyeButton>
                  </PasswordDiv>
                  <FormLabel marginTop="6px" marginBottom="6px" >Повторите пароль</FormLabel>
                  <PasswordDiv>
                    <FormInput  type="password"
                    placeholder="Введите пароль"/>
                    <EyeButton>
                      <img src={closedEye}/>
                    </EyeButton>
                  </PasswordDiv>
                  
                  <FormButton>Зарегистрироваться</FormButton>

                  <ColoredText fontSize="24px">
                    Уже есть аккаунт? <FormLink>Войти</FormLink>
                  </ColoredText>
                </Form>

              </Wrapper>
          </main>
    </BaseStyles>
  );
}

export default Authentication;