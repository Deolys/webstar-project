import React, { useState, useEffect } from "react";

import { Wrapper, BaseStyles, PopUpWin, LoginForm, Ellipses} from './auth.styled';
import TextStyles from './auth.text.styled';
import PopUpWinComponent from './pop.up.win';
import LoginFormComponent from './login.form'; 

const Authentication = () => {
  return(
    <BaseStyles>
    <><TextStyles>
      </TextStyles>
      <main>
              <Wrapper>
                <Ellipses/>
                <PopUpWin>
                    <PopUpWinComponent/>
                </PopUpWin>
                <LoginForm>
                    <LoginFormComponent/>
                </LoginForm>
              </Wrapper>
          </main></>
</BaseStyles>
  );
}

export default Authentication;