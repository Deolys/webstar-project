import styled from "@emotion/styled";

export const Form = styled.form`
  width: 100%;
  padding: 46px 30px;
  max-width: 500px;
  background-color: #2f3134;
  border: 0px #2f3134;
  border-radius: 30px;


`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat;
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

interface FormLabelProps {
  marginTop?: string;
  marginBottom?: string;
}

export const FormLabel = styled.div<FormLabelProps>`
    margin-top: ${(props) => props.marginTop ? props.marginTop: ''};
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom: ''};
    font-weight: bold;
`;

interface TextStylesProps {
    marginTop?: string;
    marginBottom?: string;
    color?: string;
    fontSize?:string;
    fontWeight?:string;
}

export const ColoredText = styled.span<TextStylesProps>`
    color: ${(props) => props.color ? props.color : ''};
    margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
    font-size: ${(props) => props.fontSize ? props.fontSize : ''};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : ''};
`;

export const FormTitle = styled.h1`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6px;
`;

export const FormSubTitle = styled.h2`
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 10px;
`;

export const FormButton = styled.button`
    width:100%;
    height: 60px;
    background: linear-gradient(#25458B, #23D7C2);    
    border: 1px #2F3134;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 38px;
    margin-bottom: 16px;
`;

export const FormLink = styled.a`
    font-size: 24px;
    color: #35C7AD;
`
export const EyeButton = styled.button`
    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: 8px;
`

export const PasswordDiv = styled.div`
  position: relative;
`
