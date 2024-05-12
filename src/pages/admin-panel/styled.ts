import styled from "@emotion/styled";

export const Container = styled.main`
  max-width: 1440px;
  padding-inline: clamp(0.625rem, -0.625rem + 6.25vw, 5rem);
  margin: 0 auto;
`;

export const TopDiv = styled.div`
  padding-inline: 195px;
  @media (max-width: 1080px) {
    padding-inline: 0;
  }
`;

export const MessagesDiv = styled.div`
  margin-top: 60px;
`;
