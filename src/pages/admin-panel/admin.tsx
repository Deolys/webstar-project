import React, { useState, useEffect, useContext} from "react";

import { Header } from "../../components/header";
import { Search } from "../../components/search";
import { Message } from "../../components/message";

import { Container, MessagesDiv, TopDiv } from "./styled";
import { Title } from "../../components/title";
import { AuthContext } from "../../contexts/auth-context";

const AdminPanel = () => {
  const { currentUser } = useContext(AuthContext);

  const [searchValue, setSearchValue] = useState("");
  const [searchMessages, setSearchMessages] = useState([]);
  const [messagesData, setMessagesData] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  useEffect(() => {
    fetch("/api/messages").then(
      (response) => {
        response.json()
        .then((data) => {
        setMessagesData(data.data);
     });
   })
  }, []);

  useEffect(() => {
    const filteredMessages = messagesData.filter((message) =>
      {
        const numberedMessage = `#${message.id} ${message.title}`;
        return numberedMessage.toLowerCase().includes(searchValue.toLowerCase());
      }
    );
    setSearchMessages(filteredMessages);
  }, [searchValue, messagesData]);

  if(currentUser && currentUser.email !== "admin@admin.ru") {
     location.replace("/");
  }
  
  return (
    currentUser && currentUser.email === "admin@admin.ru" && <>
      <div className="wrapper">
        <Header showFavourites setShowFavourites/>
        <main className="page">
          <Container>
            <section className="panel">
              <TopDiv>
                <Title letterSpace={"-0.02em"}>
                  With great power comes great responsibility
                </Title>
                <Search searchValue={searchValue} handleSearchChange={handleSearchChange} />
              </TopDiv>
              <MessagesDiv>
                {searchMessages.map((item) => (
                  <Message key={item.id} number={item.id} title={item.title}/>
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
