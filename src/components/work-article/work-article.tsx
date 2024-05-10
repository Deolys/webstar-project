import React from 'react';
import {UploadBtn} from '../upload-btn';

import {ContentItem, ItemPhoto, ItemTextarea, ItemLabel, ItemInput, ItemParagraph} from './work-article.styled';

export default function WorkArticle({ articleData, isEditing}) {
  const addImage = () => {
    console.log('add image');
  }

  return (
    <ContentItem>
      <ItemPhoto>
      {articleData.image ? (
            <img src={articleData.image} alt="Контекстное изображение" />
        ) : (
            isEditing && <UploadBtn isRel={false} bindAction={addImage}/>
        )}
      </ItemPhoto>
      {isEditing ? (
        <>
          <ItemInput type="text" maxLength={50} placeholder="Введите название..." defaultValue={articleData.label} onChange={(e) => {articleData.label = e.target.value}} />
          <ItemTextarea maxLength={350} placeholder="Введите описание" defaultValue={articleData.text} onChange={(e) => {articleData.text = e.target.value}}></ItemTextarea>
        </>
      ) : (
        <>
          <ItemLabel>{articleData.label}</ItemLabel>
          <ItemParagraph>{articleData.text}</ItemParagraph>
        </>
      )}
    </ContentItem>
  );
}
