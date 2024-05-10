import styled from '@emotion/styled';

import plusImage from '../../assets/icons/Plus.svg';

export const StyledUploadBtn = styled.button`
  position: ${(props: {isRel:Boolean}) => (props.isRel ? 'relative' : 'absolute')};
  background-image: url(${plusImage});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;
  cursor: pointer;
  height: 3.125rem;
  width: 3.125rem;
  border: none;
  border-radius: 50%;
  margin: 0.875rem;

  &:hover {
    outline: 3px solid #23D7C2;
  }

  &:active {
    opacity: 0.5;
    outline: 3px solid #23D7C2;
  }
`;
