import React, { useState, useEffect } from "react";

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

const cardsData = [
  {
    "id": "1",
    "imageUrl": "site1",
    "title": "Верстка сайтов любой сложности. Мобильная разработка",
    "tags": ["Сайты", "Под ключ", "Десктоп"]
  },
  {
    "id": "2",
    "imageUrl": "site3",
    "title": "Дизайн сайтов. Разработка сайтов под ключ",
    "tags": ["Сайты", "Под ключ", "Десктоп"]
  },
  {
    "id": "3",
    "imageUrl": "site2",
    "title": "FullStack разработка приложений на React",
    "tags": ["Сайты", "Под ключ", "Десктоп"]
  },
  {
    "id": "4",
    "imageUrl": "site1",
    "title": "Верстка сайтов любой сложности. Мобильная разработка",
    "tags": ["Сайты", "Под ключ", "Десктоп"]
  },
  {
    "id": "5",
    "imageUrl": "site3",
    "title": "Дизайн сайтов. Разработка сайтов под ключ",
    "tags": ["Дизайн", "Под ключ"]
  },
  {
    "id": "6",
    "imageUrl": "site2",
    "title": "FullStack разработка приложений на React",
    "tags": ["Сайты", "Под ключ", "Мобильные устройства"]
  }
]

export function Main() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [favouriteCards, setFavouriteCards] = useState(
    JSON.parse(localStorage.getItem('favouriteCards')) || []
  );
  const [showFavourites, setShowFavourites] = useState(false);
  const [cardsInOneColumn, setCardsInOneColumn] = useState(false);

  // const [cardsData, setCardsData] = useState([])
  // useEffect(() => {
  //   fetch('/api/cards-data')
  //   .then(response => response.json())
  //   .then(data => {
  //     setCardsData(data.data);
  //   })
  // }, [])

  const handleSearchChange = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  useEffect(() => {
    localStorage.setItem('favouriteCards', JSON.stringify(favouriteCards));
  }, [favouriteCards]);

  useEffect(() => {
    setFilteredCards(
      cardsData.filter((card) =>
        card.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedTags.length === 0 ||  selectedTags.every((tag) => card.tags.includes(tag))) &&
        (!showFavourites || favouriteCards.find((cardId) => cardId === card.id))
      )
    );
  }, [searchValue, selectedTags, showFavourites, favouriteCards, cardsData]);

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
                .map((item, index) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    tags={item.tags}
                    selectedTags={selectedTags}
                    setFavouriteCards={setFavouriteCards}
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
