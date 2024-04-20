import styled from "@emotion/styled";

export const BottomBar = styled.div`
  position: sticky;
  width: inherit + 1.25rem;
  height: 5rem;
  left: 0;
  bottom: 0;
  z-index: 2;
  background-color: #2F3134;
  justify-content: center;
  border-radius: 0 0 20px 20px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`;

export const ManipulateBtn = styled.button`
  width: 15.75rem;
  height: 4rem;
  font-size: 1.25rem;
  margin: 0.5rem;
  font-weight: bold;
  background-image: linear-gradient(20deg, #17E96B, #24D7C2);
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    outline: 3px solid #23d7c289;
  }

  &.cancel {
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    border-radius: 0px;
    border: 2px solid;
    background-color: transparent;
    border-image: linear-gradient(20deg, #24D7C2 38%, #17E96B 65%);
    border-image-slice: 1;
    float: left;
  }

  &.accept {
    float: right;
    color: #000000;
  }
`;
