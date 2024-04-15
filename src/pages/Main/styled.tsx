import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1440px;
  padding-inline: clamp(
    0.625rem,
    -0.625rem + 6.25vw,
    5rem
  ); //10-80px 320-1440px
  margin: 0 auto;
`;

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

export const PageMain = styled.main`
  width: 100%;
`;

export const PageContainer = styled(Container)`
  padding-inline: 90px 0;
  @media (max-width: 1260px) {
    padding-left: 20px;
  }
  @media (max-width: 540px) {
    padding-left: 0;
  }
`;

export const Title = styled.h1`
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
  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 540px) {
    font-size: 24px;
  }
`;

export const CardsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(231px, 1fr));
  gap: 80px clamp(1.875rem, -3.195rem + 11.19vw, 6.875rem); //30-110px 725-1440px
`;
