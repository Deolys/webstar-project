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

export const Title = styled.h2`
  letter-spacing: -0.02em;
  padding-block: 60px;
  font-family: Montserrat, sans-serif;
  font-size: 38px;
  font-weight: 800px;
  background: rgb(23, 233, 107);
  background: -moz-linear-gradient(
    110deg,
    rgba(23, 233, 107, 1) 0%,
    rgba(36, 215, 194, 1) 100%
  );
  background: -webkit-linear-gradient(
    110deg,
    rgba(23, 233, 107, 1) 0%,
    rgba(36, 215, 194, 1) 100%
  );
  background: linear-gradient(
    110deg,
    rgba(23, 233, 107, 1) 0%,
    rgba(36, 215, 194, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#17e96b",endColorstr="#24d7c2",GradientType=1);

  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1080px) {
    font-size: 32px;
  }
`;

export const MessagesDiv = styled.div`
  margin-top: 60px;
`;
