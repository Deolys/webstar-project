import React, { useState, useEffect } from "react";
import {Global} from '@emotion/react';

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

import {/*sliderData,*/ /*someTags,*/ /*profileData,*/ articleData1} from '../../example-data/example-data.js';


const Card = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavouritesAdded, setIsFavouritesAdded] = useState(false);
    const [articleCount, setArticleCount] = useState(articleData1.length);

    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    }; 

    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };

    const handleFavouritesToggle = () => {
      setIsFavouritesAdded(!isFavouritesAdded)
    }

    const addArticle = () => {
      articleData1.length<5 && articleData1.push({id: Math.random().toString(36).substring(2), image: "", label: "", text: ""});
      setArticleCount(articleData1.length);
    }

    const deleteArticle = (id) => () => {
      console.log(id);
      articleData1.splice(articleData1.findIndex(item => item.id === id), 1);
      setArticleCount(articleData1.length);
    }

    const [data, setData] = useState({
      cardData: [],
      articles: [],
      profileData: [],
      sliderImages: [],
      tags: []
    });
    useEffect(() => {
      const id = location.pathname.split('/').pop();
      fetch(`/api/cards-data/${id}`)
      .then(response => response.json())
      .then(data => {
        setData({
          cardData: data,
          articles: data.articles,
          profileData: data.profileData,
          sliderImages: data.sliderImages,
          tags: data.tags
        });
      })
    }, [])


    return (
      <>
      <Global styles={globalStyles}/>
      <CardBody>
        <Header  showFavourites setShowFavourites />

      <MainContainer>
      {/* <label className="container-label">Профиль пользователя</label> */}
          
          <TopButtonsPanel isOwner={true} favouritesBtnAction={handleFavouritesToggle} optionsBtnAction={handleEditModeToggle}/>

          <Slider sliderData={data.sliderImages} isEditing={isEditMode}/>

          <TagsPanel tags={data.tags} setData={setData} isEditing={isEditMode}/>

          <ProfileInfo profileData={data.profileData} isEditing={isEditMode}/>

          <ContentContainer>
              <ContainerLabel>Информация о работе пользователя</ContainerLabel>
              { data.articles.map((item, _) => 
                {
                  return(<WorkArticle key={item.id} articleData={item} isEditing={isEditMode} bindAction={deleteArticle(item.id)}/>)
                })
              }
              {isEditMode&&<UploadBtn isRel={true} bindAction={addArticle}/>}
          </ContentContainer>
        
          <BottomButtonsPanel isEditing={isEditMode} cancelBtnAction={handleEditModeToggle} finishBtnAction={handleEditModeToggle}/>
      </MainContainer>
      
      <Ellipses count={"4"}/>
      </CardBody>
      </>
      );
  };
  
  export default Card;
