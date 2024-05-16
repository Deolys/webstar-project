import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { CardTags } from "./card-tags";

import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';

import { CardArticle, CardImage, DescDiv, FavouriteDiv, FavouriteIcon, ImageDiv, Title } from "./styled";

import { URLs } from "../../__data__/urls";
import { cardPreviews } from "../../assets/images";

export function Card({ id, imageUrl, title, tags, selectedTags, setFavouriteCards, cardsInOneColumn}) {

const [isFavourite, setIsFavourite] = useState(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favouriteCards'));
    return storedFavourites ? storedFavourites.includes(id) : false;
  });

  const handleSetIsFavourite = (e) => {
    e.preventDefault();
    setIsFavourite((wasFavourite) => {
      const storedFavourites = JSON.parse(localStorage.getItem('favouriteCards')) || [];
      const updatedFavourites = wasFavourite ?
        storedFavourites.filter(cardId => cardId !== id) :
        [...storedFavourites, id];
      setFavouriteCards(updatedFavourites);
      return !wasFavourite;
    });
  };

  return (
      <Link to={URLs.ui.cardDetail.getUrl(id)} target="_blank">
          <CardArticle>
              <FavouriteDiv onClick={handleSetIsFavourite}>
                  <FavouriteIcon src={isFavourite? starFilled : starOutline} title="Избранное" alt="Иконка избранного" />
              </FavouriteDiv>
              <ImageDiv>
                  <CardImage src={cardPreviews[imageUrl]} big={cardsInOneColumn} alt="Превью карточки" aria-label="Превью карточки" />
              </ImageDiv>
              <DescDiv>
                  <Title>{title}</Title>
                  <CardTags tags={tags} selectedTags={selectedTags}/>
              </DescDiv>
          </CardArticle>
      </Link>
  );
}
