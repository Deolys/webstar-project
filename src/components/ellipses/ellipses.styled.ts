import styled from "@emotion/styled";

import Ellipse1 from '../../assets/images/Ellipse1.png';
import Ellipse2 from '../../assets/images/Ellipse2.png';
import Ellipse3 from '../../assets/images/Ellipse3.png';
import Ellipse4 from '../../assets/images/Ellipse4.png';

export const StyledEllipses = styled.div`
  position: absolute;
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  max-width: 220rem;
  margin-top: 2rem;
  gap: 20rem;
  height: inherit;
  clip-rule: evenodd;
  padding: 0;
  overflow: hidden;
`;

export const Ellipse = styled.div`
  width: 520px;
  height: 360px;
  background: url(${Ellipse1}) no-repeat center center;
  background-size: contain;
  z-index: 0;
  margin-right: calc(-50% - 350px);

  &:nth-of-type(even) {
    margin-right: 0;
    margin-left: calc(-50% - 350px);
  }

  &:nth-of-type(4n+2) {
    background-image: url(${Ellipse2});
  }

  &:nth-of-type(4n+3) {
    background-image: url(${Ellipse3});
  }

  &:nth-of-type(4n+4) {
    background-image: url(${Ellipse4});
  }
`;
