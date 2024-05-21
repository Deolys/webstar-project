import styled from '@emotion/styled';

export const StyledTopButtonsPanel = styled.div`
  display: inline-block;
  height: auto;
  border-radius: 1.25rem 1.25rem 0 0;
  width: 100%;
`;

export const AngleButton = styled.button`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  float: ${( props: {floatRight:boolean} ) => (props.floatRight ? 'right' : 'left')};
  border: none;
  border-radius: ${( props:any ) => (props.floatRight ? '0 20px 0 20px' : '20px 0 20px 0')};
  background-color: #2A2E38;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    outline: 2px solid #23D7C2;
  }
`;
