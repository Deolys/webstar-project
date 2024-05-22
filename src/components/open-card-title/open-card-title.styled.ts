import styled from "@emotion/styled";

export const Title = styled.h1`
  font-size: clamp(1.25rem, 0.875rem + 1.11vw, 1.875rem); //20-30px 540-1440px
  padding: 0.5rem 1rem;
  font-weight: 400;
`;

export const StyledInput = styled.input`
  width: calc(100% - 2rem);
  background-color: #8c8c8c;
  border-radius: 10px;
  font-size: clamp(1.25rem, 0.875rem + 1.11vw, 1.875rem); //20-30px 540-1440px
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  font-weight: 400;
  color: #fff;
`;