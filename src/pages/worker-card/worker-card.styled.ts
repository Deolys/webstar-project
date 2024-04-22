import styled  from "@emotion/styled";
import {css} from '@emotion/react';

export const globalStyles = css`
  html {
    font-size: 12px;

    @media (max-width: 750px) {
      font-size: 10px;
    }
  }

  button {
    padding: 0;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: inherit;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1E1F21;
  margin: 0;
  padding: 0;
  font-family: Inter;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 7.5rem 0;
  background-color: #3E434F;
  border-radius: 20px;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3.75rem 0rem;
  flex-wrap: wrap;
  gap: 3.75rem;
  margin: 3rem 0;
  background-color: #2A2E38;
  justify-content: center;
`;

export const ContainerLabel = styled.div`
  position: absolute;
  margin-top: -5rem;
  font-size: 1.2rem;
  background-color: #3F484C;
  border-radius: 50px;
  border: 1px solid #23D7C2;
  padding: 0.625rem;
  color: #ffffff;
`;