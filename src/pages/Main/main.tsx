import React, { useState } from "react";

import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";
import { Card } from "../../components/card";
import { Search } from "../../components/search";

import "../../styles/normalize.css";
import "../../styles/style.css";

import site1 from "../../assets/images/site1.jpeg";
import site2 from "../../assets/images/site2.png";
import site3 from "../../assets/images/site3.jpg";
import {
  CardsDiv,
  ContentContainer,
  PageContainer,
  PageMain,
} from "./styled";
import { Title } from "../../components/title";

const MainCards = [
  {
    id: "id100",
    imageUrl: site1,
    title: "Верстка сайтов любой сложности. Мобильная разработка",
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
  {
    id: "id101",
    imageUrl: site3,
    title: "Дизайн сайтов. Разработка сайтов под ключ",
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
  {
    id: "id102",
    imageUrl: site2,
    title: "FullStack разработка приложений на React",
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
  {
    id: "id103",
    imageUrl: site1,
    title: "Верстка сайтов любой сложности. Мобильная разработка",
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
  {
    id: "id104",
    imageUrl: site3,
    title: "Дизайн сайтов. Разработка сайтов под ключ",
    tags: ["Дизайн", "Под ключ"],
  },
  {
    id: "id105",
    imageUrl: site2,
    title: "FullStack разработка приложений на React",
    tags: ["Сайты", "Под ключ", "Мобильная разработка"],
  },
];

export function Main() {
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredCards =
    selectedTags.length > 0
      ? MainCards.filter((item) =>
          selectedTags.every((tag) => item.tags.includes(tag))
        )
      : MainCards;

  return (
    <div className="wrapper">
      <Header />
      <ContentContainer>
        <Sidebar selectedTags={selectedTags} onSelect={setSelectedTags} />
        <PageMain>
          <PageContainer>
            <section className="main">
              <Title>WebStar - create your digital dream with us</Title>
              <Search />
              <CardsDiv>
                {filteredCards.map((item, index) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    tags={item.tags}
                    selectedTags={selectedTags}
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
