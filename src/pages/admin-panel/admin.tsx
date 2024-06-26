import React, { useState, useEffect, useContext} from "react";

import { Header } from "../../components/header";
import { Search } from "../../components/search";
import { Message } from "../../components/message";

import { Container, MessagesDiv, TopDiv } from "./styled";
import { Title } from "../../components/title";
import { AuthContext } from "../../contexts/auth-context";
import { URLs } from "../../__data__/urls";
import { ErrorSign } from "../../components/error-sign";
import { Loading } from "../../components/loading";

const AdminPanel = () => {
  const { currentUser } = useContext(AuthContext);
  const [errorPicture, setErrorPicture] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchMessages, setSearchMessages] = useState([]);
  const [messagesData, setMessagesData] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  useEffect(() => {
    setIsLoad(true);
    fetch(`${URLs.api.main}/messages`).then((response) => {
      if (!response.ok) {
        return response.text().then((errorMessage) => {
            setErrorPicture(true);
            throw new Error(errorMessage);
        });
      }
      return response.json();
    })
        .then((data) => {
          const messages = data.data.filter((item) => item.onModerating === true);
          setIsLoad(false);
          setErrorPicture(false);
        setMessagesData(messages);
     }).catch((error) => {
      console.error('error: ', error);
      setErrorPicture(true)
    });
   
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
    location.replace(`${URLs.baseUrl}`);
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
                {errorPicture ? <ErrorSign text="Возникла ошибка. Попробуйте позже"/> :
                isLoad ? <Loading /> :
                searchMessages.map((item) => (
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
