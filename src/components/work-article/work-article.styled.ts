import styled from '@emotion/styled';
import {DeleteBtn} from '../delete-btn';

export const ContentItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(50%, auto);
  grid-template-rows: auto max-content;
  width: 90%;
  height: auto;
  background-image: linear-gradient(90deg, #7949dfe2, #178d7f7c);
  margin: 0 auto;
  overflow: hidden;
  border-radius: 2.5rem;
  padding: 1rem;
  box-shadow: 0.25px 1.25rem 1rem 0 rgba(0, 0, 0, 0.35);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    width: 100%;
  }
`;

export const ItemPhoto = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  display: flex;
  width: auto;
  min-width: 10rem;
  height: auto;
  min-height: 16rem;
  background-color: #c7c7c7;
  border-radius: 2.5rem;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2.5rem;
  }

  @media (max-width: 750px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    margin-bottom: 1.25rem;
  }
`;

export const ItemTextarea = styled.textarea`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: auto;
  height: auto;
  min-height: 12rem;
  padding: 1rem;
  margin-left: 1rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: none;
  color: #ffffff;
  font-size: 1.5rem;
  border-radius: 2.5rem;
  float: right;
  resize: none;
  overflow: hidden;

  &::placeholder {
  color: #cdcdcd;
  };

  @media (max-width: 750px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ItemLabel = styled.label`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  font-size: 1.5rem;
  border: 1px solid #23d7c2;
  border-radius: 2.5rem;
  min-width: 8rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: min-content;
  min-height: 2.5rem;
  max-height: 6rem;
  width: auto;
  color: #ffffff;
  background-color: transparent;

  @media (max-width: 750px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ItemInput = styled.input`
  font-size: 1.5rem;
  border: 1px solid #23d7c2;
  border-radius: 2.5rem;
  min-width: 8rem;
  padding: 0.5rem 1rem;
  margin-left: 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  height: min-content;
  min-height: 2.5rem;
  max-height: 6rem;
  width: auto;
  color: #ffffff;
  background-color: transparent;

  &::placeholder {
    color: #cdcdcd;
  }

  @media (max-width: 750px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ItemParagraph = styled.p`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: auto;
  height: auto;
  min-height: 12rem;
  padding: 1rem;
  margin-left: 1rem;
  box-sizing: border-box;
  background: none;
  color: #ffffff;
  font-size: 1.5rem;
  border-radius: 2.5rem;
  float: right;
  resize: none;
  overflow: hidden;

  @media (max-width: 750px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const RemoveArticleBtn = styled.div`
  grid-row: 3/ 4;
  grid-column: 1/3;
  margin-top: 1rem;
  justify-self:center;

  @media (max-width: 750px) {
    grid-row: 4/ 5;
    grid-column: 1 / 2;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;
