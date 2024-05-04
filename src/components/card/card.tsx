import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { CardTags } from "./card-tags";


import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';

import { CardArticle, CardImage, DescDiv, FavouriteDiv, FavouriteIcon, ImageDiv, Title } from "./styled";

import { URLs } from "../../__data__/urls";

export function Card({ id, imageUrl, title, tags, selectedTags}) {

  return (
      <Link to={URLs.ui.cardDetail.getUrl(id)} target="_blank">
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
      </Link>
  );
}