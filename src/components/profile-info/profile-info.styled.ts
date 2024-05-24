import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilePhoto = styled.div`
  margin: 1.25rem auto;
  margin-bottom: 0px;
  width: 11rem;
  height: 11rem;
  overflow: hidden;
  border-radius: 5px;
  background-color: #C7C7C7;
  border: 3px solid #8BE3D9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const ProfileDescription = styled.div`
  text-align: center;
  background-color: #3F484C;
  border-radius: 7px;
  max-width: 29.125rem;
  width: 100%;
  height: auto;
  min-height: 19.75rem;
  margin: auto;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  box-shadow: 3px 20px 15px 0px rgba(0, 0, 0, 0.35);
`;

export const Username = styled.span`
  font-size: 1.5rem;
  color: #8BE3D9;
  padding: 0.625rem;
  margin: 0.625rem auto;
`;

export const Location = styled.span`
  font-style: italic;
  color: #ffffff;
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  max-width: calc(100% - 2.5rem);
  overflow-wrap: break-word;
`;

export const StyledInput = styled.input`
  font-style: italic;
  font-size: 1.125rem;
  margin-bottom: 0.625rem;
  background-color: #8c8c8c;
`;

export const StyledTextarea = styled.textarea`
  min-height: 12.5rem;
  height: auto;
  overflow: visible;
  padding: 0.625rem;
  width: 90%;
  margin: 0.625rem;
  min-width: 10rem;
  text-align: center;
  border: 1px solid #ccc;
  color: #ffffff;
  font-size: 1.125rem;
  border-radius: 5px;
  background-color: #3F484C;
  box-sizing: unset;    
  resize: none;

  &::-webkit-scrollbar {
      display: none;
  };

  &::placeholder {
  color: #cdcdcd;
  };
`;

export const StyledP = styled.p`
  min-height: 12.5rem;
  height: auto;
  overflow: visible;
  padding: 0.625rem;
  width: 90%;
  margin: 0.625rem;
  min-width: 10rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.125rem;
  border-radius: 5px;
  background-color: #3F484C;
  box-sizing: unset;    
  resize: none;
  overflow-wrap: break-word;
  &::-webkit-scrollbar {
      display: none;
  };
`;

export const Background = styled.div`
  position: absolute;
  overflow: hidden;
  top: 7.5rem; 
  left: 0; 
  width: 100%;
  height: 18.75rem;
  z-index: 0;
  background-color: #B5CCCD;
  display: flex;

  img {
    display: inline-block;
    width: 100%;
    position: absolute;
    top: 0;
  }
`;
