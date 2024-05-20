import styled from '@emotion/styled';

export const StyledSlider = styled.div`
  position: relative;
  background-color: #9EA0A6;
  width: auto;
  aspect-ratio: 1.973;
  height: 100%;
  max-height: 37.5rem;
  overflow: hidden;
  border-radius: 7px;
  margin: 0.5rem 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.25rem 1.25rem 1rem 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderUl = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
`;

export const SliderLi = styled.li`
  display: none;
  position: absolute;
  object-fit: contain;
  width: 100%;

  &.active {
      display: inline-block;
    };

  img {
    width: 100%;
  };
`;

export const PaginationDots = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 0.625rem;
  justify-content: center;
  background-color: #545b6f6c;
  border-radius: 50px;
  padding: 0.2rem;
  z-index: 1;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props: {isActive: Boolean}) => props.isActive ? '#23D7C2' : '#D9D9D9'};
`;

export const DeleteSlideBtn = styled.div`
  position: absolute;
  bottom: 0;
  justify-content: center;
`
