import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

// Общие стили
export const BaseStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    border-radius: 0%;
    box-sizing: border-box;
  }

  :root {
    --max-width: 1440px;
    --min-width: 320px;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    background-color: black;
    font-family: Montserrat;
  }
`;

// Стили для LoginForm
export const LoginForm = styled.div`
#box {
    max-width: 500px;
    background-color: #2f3134;
    border: 0px #2f3134;
    border-radius: 30px;
    padding: 46px 30px;
  }

.login-form {
    width: 100%;
}

#box2 {
    height: 45px;
    background-color:#D9D9D9; 
    border: 1px #2F3134;
    border-radius: 10px;  
}

#box3 {
    height: 45px;
    background-color:#D9D9D9; 
    border: 1px #2F3134;
    border-radius: 10px;
}

#box4{
    width:100%;
    height: 45px;
    background: linear-gradient(#25458B, #23D7C2);    
    border: 1px #2F3134;
    border-radius: 10px;
    font-weight: bold;
}

#page-name {
    margin-top: -15px;
    font-weight: bold;
}

#login-label {
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 7px;
}

#pasw-label {
    margin-top: 10px;
    margin-bottom: 7px;
    font-weight: bold;
}

#Enter{
    font-weight: bold;
    margin-top: 1rem;
    font-size: 26px;
}

#Tip1{
    margin-top: 11px;
    margin-bottom: 6px;
    font-weight: bold;
}

#Tip2{
    margin-top: 2rem;
    /* margin-left: 5rem; */
}

#eye-button{
    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: 8.2px;
}
`;

// Стили для PopUpWin
export const PopUpWin = styled.div`
  #Choose-role{
    z-index: 1; 
    font-weight: bold;
    margin-top: 11px;
    margin-bottom: 11px;
    font-size: 24px;
  }

#radio-button1 {
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: 33px;
    margin-top: 23px;
    @media (max-width: 540px) {
        margin-top: 20px;  
        margin-left: 20px;
    }
    font-weight: bold;
  }

#radio-button2 {
    position: absolute;
    width: 30px;    
    height: 30px;
    /* это пока не трогаем*/
    /* это доп формочка, которую не видно... пока что */
    margin-left: 23rex;
    margin-top: 23px;
    font-weight: bold;
    @media (max-width: 540px) {
        margin-left: 25.5rex;  
        margin-top: 20px; 
    }
  }

  #box5{
    width:100%;
    height:40px;
    background: linear-gradient(#25458B, #23D7C2);    
    border: 1px #2F3134;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    margin-top: 50px;
  }

#pop-up-win {
    top: 50%;
    left: 50%;
    position: fixed;
    z-index: 1;
    backdrop-filter: blur(5px);
    background-color: #2f3134;
    border: 0px #2f3134;
    border-radius: 30px;
    padding: 4.6vh 3vh;
    margin-top: -20vh;
    margin-left: -12vh;
    visibility: hidden;
    justify-content: center;
    align-items: center;

    @media (max-width: 540px) {
      margin-top: -21vh;
      margin-left: -16vh;
    }
  }

#pop-up-win:target {
    visibility: visible;
  }

#text-radio{
    width: 500px;
}


#x-close-button{
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    margin-left: 15px;
    margin-bottom: -5px;
    @media (max-width: 540px) {
        margin-left: 45px;
        width: 18px;
        height: 18px;  
    }
}

#x-close-button img {
    width: 100%;
    height: 100%;
}
`;

export const Ellipses = styled.div`
#spot1{
  position: fixed;
  left: -25rem;
  z-index: -1; 
  width:67rem;
  height:87rem;
  float:right;
  margin-left: 100vw;
  margin-top: -55rem;
  background-color: transparent;
}

#spot2{
  bottom: -500px;
  position: fixed;
  z-index: -1; 
  width:70rem;
  height:60rem;
  margin-top: 35rem;
  margin-left: -50rem;
  background-color: transparent;
}
`;
