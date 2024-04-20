import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: var(--dark-text-color);
  background-color: #23d7c2;
  padding: 6px 14px;
  border-radius: 32px;
  font-size: 18px;
`;

export const SearchIcon = styled.img`
  margin-left: 8px;
`;

export const SearchInput = styled.input`
  border-radius: 32px;
  width: 100%;
  height: 100%;
  padding: 10px 125px 10px 18px;
  border: 1px solid #21dbb1;
  background-color: #2a3639;
  color: #fff;

  &::placeholder {
    letter-spacing: 0.02em;
    color: #c0c0c0;
  }

  &:focus::placeholder {
    color: transparent;
  }
  @media (max-width: 540px) {
    font-size: 14px;
  }
`;
