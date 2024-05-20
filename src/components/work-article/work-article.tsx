import React, {useState, useRef} from 'react';

import {UploadBtn} from '../upload-btn';
import {DeleteBtn} from '../delete-btn';
import { ImageInput } from '../image-input';

import {ContentItem, ItemPhoto, ItemTextarea, ItemLabel, ItemInput, ItemParagraph, RemoveArticleBtn} from './work-article.styled';

import { cardPreviews } from "../../assets/images";

export default function WorkArticle({articleData, isEditing, bindDeleteArticle}) {

  const [workImage, setWorkImage] = useState(cardPreviews[articleData.imageUrl]);

  const imgInputRef = useRef(null);

  const handleUrlChange = (e) => {
    articleData.imageUrl = URL.createObjectURL(e.target.files[0]);
    setWorkImage(articleData.imageUrl);
    imgInputRef.current.value = '';
  }

  return (
    <ContentItem>
      <ItemPhoto>
        {workImage && <img src={workImage} alt="Контекстное изображение" />}
        {isEditing && <UploadBtn isRel={false} bindAction={()=>imgInputRef.current.click()}/>}
        {isEditing && <ImageInput reference={imgInputRef} onChange={handleUrlChange}/>}
      </ItemPhoto>
      {isEditing ? (
        <>
          <ItemInput type="text" maxLength={50} placeholder="Введите название..." defaultValue={articleData.label} onChange={(e) => {articleData.label = e.target.value}} />
          <RemoveArticleBtn title='Удалить карточку'>
            <DeleteBtn bindAction={bindDeleteArticle}/>
          </RemoveArticleBtn>
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

WorkArticle.defaultProps = {
  isEditing: false,
  bindDeleteArticle: () => {}
}
