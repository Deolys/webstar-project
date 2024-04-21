import styled from "@emotion/styled";


export const MainTitle = styled.h1`
  letter-spacing: ${(props: {letterSpace: string}) => props.letterSpace ? props.letterSpace: ''};
  padding-block: 60px;
  font-family: Montserrat, sans-serif;
  font-size: 38px;
  font-weight: 800;
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

  background-size: 300%;
  animation: gradient 5s infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 32px;
  }

  @media (max-width: 540px) {
    font-size: 24px;
  }
`;
