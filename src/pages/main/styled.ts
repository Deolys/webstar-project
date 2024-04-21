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

export const CardsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(231px, 1fr));
  gap: 80px clamp(1.875rem, -3.195rem + 11.19vw, 6.875rem); //30-110px 725-1440px
`;
