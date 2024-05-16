import React, {useState, useRef} from 'react';

import {UploadBtn} from '../upload-btn';
import {DeleteBtn} from '../delete-btn';

import {ContentItem, ItemPhoto, ItemTextarea, ItemLabel, ItemInput, ItemParagraph, RemoveArticleBtn, ImageInput} from './work-article.styled';

export default function WorkArticle({ articleData, isEditing, bindAction}) {

  const [workImage, setWorkImage] = useState(articleData.image);
  const imgInputRef = useRef(null);
  const handleUrlChange = (e) => {
    setWorkImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <ContentItem>
      <ItemPhoto>
        {workImage && <img src={workImage} alt="Контекстное изображение" />}
        {isEditing && <UploadBtn isRel={false} bindAction={()=>imgInputRef.current.click()}/>}
        {isEditing && <ImageInput ref={imgInputRef} onChange={handleUrlChange} type="file" accept="image"/>}
      </ItemPhoto>
      {isEditing ? (
        <>
          <ItemInput type="text" maxLength={50} placeholder="Введите название..." defaultValue={articleData.label} onChange={(e) => {articleData.label = e.target.value}} />
          <RemoveArticleBtn title='Удалить карточку'>
            <DeleteBtn bindAction={bindAction}/>
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
  isEditing:false,
  bindAction: () => {}
}
