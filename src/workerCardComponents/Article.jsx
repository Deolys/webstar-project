import React from 'react';
import UploadBtn from './UploadBtn.jsx';

import './workerCardStyles/ArticleStyle.css';

export default function Article({ articleData, isEditing }) {
  return (
    <article className="content-item">
      <div className="item-photo">
      {articleData.image ? (
            <img src={articleData.image} alt="Контекстное изображение" />
        ) : (
            isEditing && <UploadBtn/>
        )}
      </div>
      {isEditing ? (
        <>
          <input type="text" maxLength={50} placeholder="Введите название..." defaultValue={articleData.label} onChange={(e) => {articleData.label = e.target.value}} />
          <textarea maxLength={350} placeholder="Введите описание" defaultValue={articleData.text} onChange={(e) => {articleData.text = e.target.value}}></textarea>
        </>
      ) : (
        <>
          <label>{articleData.label}</label>
          <p>{articleData.text}</p>
        </>
      )}
    </article>
  );
}