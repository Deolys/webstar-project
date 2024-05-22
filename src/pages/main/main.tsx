import React, { useState, useEffect, useContext } from "react";

import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { Card } from "../../components/card";
import { Search } from "../../components/search";

import {
  CardsDiv,
  ContentContainer,
  PageContainer,
  PageMain,
} from "./styled";
import { Title } from "../../components/title";
import { AuthContext } from "../../contexts/auth-context";
import { URLs } from "../../__data__/urls";

export function Main() {
  const { currentUser } = useContext(AuthContext);

  const [selectedTags, setSelectedTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const [userFavouritesData, setUserFavouritesData] = useState([]);
  useEffect(() => {
    if(currentUser) {
      fetch(`${URLs.api.main}/user`, {
        headers: {
          'Authorization': `Bearer ${currentUser.email}`
        }
      }).then(response => 
        {
          if (!response.ok) {
            return response.text().then((errorMessage) => {
                alert(errorMessage);
                throw new Error(errorMessage);
            });
          }
          return response.json();
        }
        ).then(data => {
          setUserFavouritesData(data);
        })
    }
  }, [currentUser])

  const [favouriteCards, setFavouriteCards] = useState(
    JSON.parse(localStorage.getItem('favouriteCards')) || []
  );
  const [showFavourites, setShowFavourites] = useState(false);
  const [cardsInOneColumn, setCardsInOneColumn] = useState(false);

  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    fetch(`${URLs.api.main}/cards-data`)
    .then(response => response.json())
    .then(data => {
      setCardsData(data.data);
    })
  }, [])


  const handleSearchChange = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  useEffect(() => {
    if(!currentUser)
      localStorage.setItem('favouriteCards', JSON.stringify(favouriteCards));
  }, [favouriteCards]);

  useEffect(() => {
    setFilteredCards(
      cardsData.filter((card) =>
        card.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedTags.length === 0 ||  selectedTags.every((tag) => card.tags.includes(tag))) &&
        (!showFavourites || 
          (currentUser !== null ? userFavouritesData.find((cardId) => cardId === card.id) :
          favouriteCards.find((cardId) => cardId === card.id))
      ))
    );
  }, [searchValue, selectedTags, showFavourites, favouriteCards, cardsData, userFavouritesData, currentUser]);

  return (
    <div className="wrapper">
      <Header showFavourites={showFavourites} setShowFavourites={setShowFavourites}/>
      <ContentContainer>
        <Sidebar selectedTags={selectedTags} onSelect={setSelectedTags} setCardsInOneColumn={setCardsInOneColumn} />
        <PageMain>
          <PageContainer>
            <section className="main">
              <Title>WebStar - create your digital dream with us</Title>
              <Search searchValue={searchValue} handleSearchChange={handleSearchChange} />
              <CardsDiv cardsInOneColumn={cardsInOneColumn}>
                {filteredCards
                .map((item, _index) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    imageUrl={item.sliderImages[0]}
                    title={item.title}
                    tags={item.tags}
                    selectedTags={selectedTags}
                    setFavouriteCards={setFavouriteCards}
                    setUserFavouritesData={setUserFavouritesData}
                    userFavouritesData={userFavouritesData}
                    cardsInOneColumn={cardsInOneColumn}
                  />
                ))}
              </CardsDiv>
            </section>
          </PageContainer>
        </PageMain>
      </ContentContainer>
    </div>
  );
}

export default Main;