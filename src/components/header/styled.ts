import styled from "@emotion/styled";

export const BurgerDiv = styled.div`
  z-index: 2;
  width: 45px;
  height: 30px;
  margin-top: 26px;
  cursor: pointer;
  display: none;
  top: 0;
  right: 10px;
  position: absolute;
  @media (max-width: 540px) {
    display: block;
  }

  span:nth-of-type(1) {
    transform: translateY(-4px);
  }

  span:nth-of-type(3) {
    transform: translateY(4px);
  }

  &.change {
    span:nth-of-type(1) {
      transform: translateY(4px) rotateZ(-45deg);
      background-color: white;
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:nth-of-type(3) {
      transform: translateY(-6px) rotateZ(45deg);
      background-color: white;
    }
  }
`;

export const Bar = styled.span`
  height: 5px;
  width: 100%;
  background-color: #14b270;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
`;

export const BackgroundDiv = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  overflow: hidden;
  display: none;

  @media (max-width: 540px) {
    display: block;
  }

  &.change {
    width: 220px;
    height: 350px;
  }
`;

export const Background = styled.div`
  top: 0;
  right: 10px;
  position: absolute;
  width: 0;
  height: 0;
  background: #2a3639;
  border-radius: 50%;
  transition: 0.3s ease;

  &.change-bg {
    position: absolute;
    width: 520px;
    height: 460px;
    transform: translate(60%, -25%);
  }
`;

export const HeaderBlock = styled.header`
  font-size: 16px;
  position: sticky;
  width: 100%;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid #4d4d4d;
  background: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px;
`;

export const HeaderWrapper = styled.div`
  padding-block: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  max-width: 1440px;
  padding-inline: clamp(0.625rem, -0.625rem + 6.25vw, 5rem);//10-80px 320-1440px
  margin: 0 auto;
`;

export const LogoLink = styled.a`
  cursor: pointer;
`;
