import styled from "@emotion/styled";

export const MessageDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 18px;
  background-color: #313642;
  margin-bottom: 30px;
  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MessageNum = styled.span`
  margin-right: 20px;
  color: #17e99d;
`;

export const Title = styled.div`
  flex-grow: 1;
  font-size: 16px;
`;

const Button = styled.button`
  font-family: Inter, sans-serif;
  font-size: 16px;
  padding: 10.5px 12px;
  display: inline-block;
  margin-left: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: var(--dark-text-color);
  cursor: pointer;
  @media (max-width: 1080px) {
    &:first-of-type {
      margin-left: 0;
    }
  }
  @media (max-width: 444px) {
    font-size: 12px;
  }
`;

export const ButtonView = styled(Button)`
  background-color: #23d7c2;
`;

export const ButtonAccept = styled(Button)`
  background-color: #1cc64b;
`;

export const ButtonReject = styled(Button)`
  background-color: #d7af23;
`;