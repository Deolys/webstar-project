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

import {sliderData, someTags, profileData, articleData1} from '../../example-data/example-data.js';


const Card = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavouritesAdded, setIsFavouritesAdded] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    }; 
    const [articleCount, setArticleCount] = useState(articleData1.length);

    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };

    const handleFavouritesToggle = () => {
      setIsFavouritesAdded(!isFavouritesAdded)
    }



    const addArticle = () => {
      articleData1.length<5 && articleData1.push({image: "", label: "", text: ""});
      setArticleCount(articleData1.length);
    }

    return (
      <>
      <Global styles={globalStyles}/>
      <CardBody>
        <Header  showFavourites setShowFavourites />

      <MainContainer>
      {/* <label className="container-label">Профиль пользователя</label> */}
          
          <TopButtonsPanel isOwner={true} favouritesBtnAction={handleFavouritesToggle} optionsBtnAction={handleEditModeToggle}/>

          <Slider sliderData={sliderData} isEditing={isEditMode}/>

          <TagsPanel initialTags={someTags} isEditing={isEditMode}/>

          <ProfileInfo profileData={profileData} isEditing={isEditMode}/>

          <ContentContainer>
              <ContainerLabel>Информация о работе пользователя</ContainerLabel>
              { articleData1.map((item, index) => 
                {
                  return(<WorkArticle key={index} articleData={item} isEditing={isEditMode}/>)
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
