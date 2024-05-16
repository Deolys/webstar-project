import styled from '@emotion/styled';

import plusImage from '../../assets/icons/delete-btn.svg';

export const StyledDeleteBtn = styled.button`
  background-image: url(${plusImage});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;
  cursor: pointer;
  height: 2.25rem;
  width: 2.25rem;
  border: none;
  border-radius: 50%;

  &:hover {
    outline: 3px solid #23D7C2;
  }

  &:active {
    opacity: 0.5;
    outline: 3px solid #23D7C2;
  }
`;
