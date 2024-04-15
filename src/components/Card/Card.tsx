import React, { useState } from "react";

import { CardTags } from "./CardTags";

import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';
import { CardArticle, CardImage, DescDiv, FavouriteDiv, FavouriteIcon, ImageDiv, Title } from "./styled";

export function Card({ id, imageUrl, title, tags, selectedTags}) {


  return (
      <a href={`/card/${id}`} className="card-link" target="_blank">
          <CardArticle>
              <FavouriteDiv>
                  <FavouriteIcon src={starOutline} title="Избранное" alt="Иконка избранного" />
              </FavouriteDiv>
              <ImageDiv>
                  <CardImage src={imageUrl} alt="Превью карточки" aria-label="Превью карточки" />
              </ImageDiv>
              <DescDiv>
                  <Title>{title}</Title>
                  <CardTags tags={tags} selectedTags={selectedTags}/>
              </DescDiv>
          </CardArticle>
      </a>
  );
}