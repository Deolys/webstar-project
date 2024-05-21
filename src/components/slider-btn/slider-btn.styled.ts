import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ArrowButton = styled.button`
  background-repeat: no-repeat, repeat-x;
  background-position: center;
  opacity: 0.8;
  cursor: pointer;
  height: 100%;
  width: 3.125rem;
  min-width: 32px;
  border-radius: 7px 0px 0px 7px;
  border: none;
  margin: 0;
  z-index: 1;

  &:hover {
    background-color: #68676999;
  }

  img {
    transform: rotate(180deg);
    height: 4rem;
    width: 2rem;
    margin: auto;
  }

  ${(props: {isRight: boolean}) => {
    if (props.isRight) {
        return css`
        border-radius: 0px 7px 7px 0px;
        img {
            transform: none;
        };
      `;
    }
  }}
`;