import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Global } from '@emotion/react';

import {globalStyles, CardBody, MainContainer, ContentContainer, ContainerLabel} from "./worker-card.styled";


import {Header} from '../../components/header';
import {TopButtonsPanel} from '../../components/top-buttons-panel';
import {UploadBtn} from '../../components/upload-btn';
import {TagsPanel} from '../../components/tags-panel';
import {ProfileInfo} from '../../components/profile-info';
import {WorkArticle} from '../../components/work-article';
import {BottomButtonsPanel} from '../../components/bottom-buttons-panel';
import {Ellipses} from '../../components/ellipses';
import {Slider} from '../../components/slider';


const Card = () => {
    const {cardId} = useParams();
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavouritesAdded, setIsFavouritesAdded] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [articleCount, setArticleCount] = useState(0);
    const [articleData, setArticleData] = useState([]);
    const [profileData, setProfileData] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [someTags, setSomeTags] = useState([]);

    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };

    const handleFavouritesToggle = () => {
      setIsFavouritesAdded(!isFavouritesAdded)
    }

    useEffect(() => {
      fetch(`/api/cards-data/${cardId}`)
      .then(response => response.json())
      .then(data => {
        setCardData(data);
        setArticleData(data.articles);
        setProfileData(data.profileData);
        setSliderImages(data.sliderImages);
        setSomeTags(data.tags);
        setArticleCount(data.articles.length);
      });

      // if (currentUser && (currentUser.email === cardData.ownerId || currentUser.email === "admin@admin.ru")) {
      //   fetch(`api/moderating-cards-data/${cardId}`)
      //   .then(response => response.json())
      //   .then(data => {
      //     if(data.isModerating) {
      //       setCardData(data);
      //       setArticleData(data.articles);
      //       setProfileData(data.profileData);
      //       setSliderImages(data.sliderImages);
      //       setSomeTags(data.tags);
      //       setArticleCount(data.articles.length);
      //     }
      //   });
      // }
    }, [])

    const addArticle = () => {
      if (articleData.length<5) {
        articleData.push({id: Math.random().toString(36).substring(2), image: "", label: "", text: ""});
        setArticleData(articleData);
        setArticleCount(articleData.length);
      }
    }

    const deleteArticle = (id) => () => {
      articleData.splice(articleData.findIndex(item => item.id === id), 1);
      setArticleData(articleData);
      setArticleCount(articleData.length);
    }

    const postData = () => {
      fetch('/api/cards-data/' + cardId, {method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          articles: articleData,
          profileData: profileData,
          sliderImages: sliderImages,
          tags: someTags
        })
      })
      .then(response => response.json())
      .then(data => {
        // Обработка ответа от сервера после отправки данных
        console.log(data);
      })
      .catch(error => {
        // Обработка ошибки при отправке данных на сервер
        console.error('Error:', error);
      });
    }

    return (
      <>
      <Global styles={globalStyles}/>
      <CardBody>
        <Header  showFavourites setShowFavourites />

      <MainContainer>
      {/* <label className="container-label">Профиль пользователя</label> */}
          <TopButtonsPanel isOwner={true} favouritesBtnAction={handleFavouritesToggle} optionsBtnAction={handleEditModeToggle}/>

          <Slider sliderImages={sliderImages} setSliderImages={setSliderImages} isEditing={isEditMode}/>

          <TagsPanel tags={someTags} setTags={setSomeTags} isEditing={isEditMode}/>

          <ProfileInfo profileData={profileData} isEditing={isEditMode}/>

          <ContentContainer>
              <ContainerLabel>Информация о работе пользователя</ContainerLabel>
              { articleData.map((item, _) => 
                {
                  return(
                  <WorkArticle 
                    key={item.id} 
                    articleData={item}
                    isEditing={isEditMode} 
                    bindDeleteArticle={deleteArticle(item.id)}
                    />
                  )
                })
              }
              {isEditMode&&<UploadBtn isRel={true} bindAction={addArticle}/>}
          </ContentContainer>
        
          <BottomButtonsPanel isEditing={isEditMode} cancelBtnAction={handleEditModeToggle} finishBtnAction={handleEditModeToggle}/>
      </MainContainer>
      
      <Ellipses count={articleCount}/>
      </CardBody>
      </>
      );
  };
  
  export default Card;
