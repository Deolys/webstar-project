import React from "react";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Message } from "../../components/Message";

import "../../styles/normalize.css";
import "../../styles/style.css";

import { Container, MessagesDiv, Title, TopDiv } from "./styled";

const MessagesArray = [
  {
    number: 100000,
    title: "Самое лучшее название, которое только можно придумать!",
  },
  {
    number: 100001,
    title: "Самое лучшее название, которое только можно придумать!",
  },
  {
    number: 100002,
    title: "Самое лучшее название, которое только можно придумать!",
  },
  {
    number: 100003,
    title: "Самое лучшее название, которое только можно придумать!",
  },
  {
    number: 100004,
    title: "Самое лучшее название, которое только можно придумать!",
  },
  {
    number: 100005,
    title: "Самое лучшее название, которое только можно придумать!",
  },
];

const AdminPanel = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Container>
            <section className="panel">
              <TopDiv>
                <Title>
                  With great power comes great responsibility
                </Title>
                <Search />
              </TopDiv>
              <MessagesDiv>
                {MessagesArray.map((item) => (
                  <Message number={item.number} title={item.title} />
                ))}
              </MessagesDiv>
            </section>
          </Container>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
