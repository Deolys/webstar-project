import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';

import { CardTags } from "./card-tags";

import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';

import { CardArticle, CardImage, DescDiv, FavouriteDiv, FavouriteIcon, ImageDiv, Title } from "./styled";

import { URLs } from "../../__data__/urls";
import { cardPreviews } from "../../assets/images";
import { AuthContext } from "../../contexts/auth-context";

export function Card({ id, imageUrl, title, tags, selectedTags, setFavouriteCards, setUserFavouritesData, userFavouritesData, cardsInOneColumn}) {
const { currentUser } = useContext(AuthContext);
const [isFavourite, setIsFavourite] = useState(() => {
  if (currentUser) {
    return userFavouritesData ? userFavouritesData.includes(id) : false;
  }
    const storedFavourites = JSON.parse(localStorage.getItem('favouriteCards'));
    return storedFavourites ? storedFavourites.includes(id) : false;
  });

  useEffect(() => {
    if(currentUser && userFavouritesData.includes(id)) {
      setIsFavourite(true);
    }
  }, [userFavouritesData]);

  const handleSetIsFavourite = (e) => {
    e.preventDefault();
    if (currentUser) {
      fetch('/api/favourite', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          cardId: id,
          email: currentUser.email
         }) 
        }).then(responce => {
          if(responce.ok) {
           setIsFavourite((wasFavourite) => {
            wasFavourite ?
            setUserFavouritesData(userFavouritesData.filter(cardId => cardId!== id)) : 
            setUserFavouritesData([...userFavouritesData, id]);
            return !wasFavourite;
           })
         }
        })
      }
      else
        {
          setIsFavourite((wasFavourite) => {
          const storedFavourites = JSON.parse(localStorage.getItem('favouriteCards')) || [];
          const updatedFavourites = wasFavourite ?
            storedFavourites.filter(cardId => cardId !== id) :
            [...storedFavourites, id];
          setFavouriteCards(updatedFavourites);
          return !wasFavourite;
          }
          );
        }
    
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
