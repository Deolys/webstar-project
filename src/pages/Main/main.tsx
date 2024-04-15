import React, { useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";

import "../../styles/normalize.css";
import "../../styles/style.css";

import site1 from "../../assets/images/site1.jpeg";
import site2 from "../../assets/images/site2.png";
import site3 from "../../assets/images/site3.jpg";
import { CardsDiv, ContentContainer, PageContainer, PageMain, Title } from "./styled";

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
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
  {
    id: "id105",
    imageUrl: site2,
    title: "FullStack разработка приложений на React",
    tags: ["Сайты", "Под ключ", "Десктоп"],
  },
];

export function Main() {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <ContentContainer>
        <Sidebar selectedTags={selectedTags} onSelect={setSelectedTags}/>
        <PageMain>
          <PageContainer>
            <section className="main">
              <Title>
                WebStar - create your digital dream with us
              </Title>
              <Search />
              <CardsDiv>
                {MainCards.map((item, index) => (
                  <Card
                    key={index}
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