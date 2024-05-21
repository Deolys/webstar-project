import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../../contexts/auth-context";


const Card = () => {
    const { currentUser } = useContext(AuthContext);
    const {cardId} = useParams();
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavouritesAdded, setIsFavouritesAdded] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [articleCount, setArticleCount] = useState(0);
    const [articleData, setArticleData] = useState([]);
    const [profileData, setProfileData] = useState([]);
    const [sliderImages, setSliderImages] = useState([]);
    const [someTags, setSomeTags] = useState([]);

    const onEdit = location.pathname.split('/').pop() === 'edit';

    const handleEditModeToggle = () => {
      setIsEditMode(!isEditMode);
    };

    const handleFavouritesToggle = () => {
      setIsFavouritesAdded(!isFavouritesAdded)
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/cards-data/${cardId}`);
          const data = await response.json();
          setArticleData(data.articles);
          setProfileData(data.profileData);
          setSliderImages(data.sliderImages);
          setSomeTags(data.tags);
          setArticleCount(data.articles.length);
    
          if (currentUser) {
            setIsOwner(currentUser.email === data.ownerId);
          }
    
          if (currentUser && onEdit && (isOwner || currentUser.email === "admin@admin.ru")) {
            const modResponse = await fetch(`/api/messages/${cardId}`);
            const modData = await modResponse.json();
            if (modData.onModerating) {
              setArticleData(modData.articles);
              setProfileData(modData.profileData);
              setSliderImages(modData.sliderImages);
              setSomeTags(modData.tags);
              setArticleCount(modData.articles.length);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [currentUser, cardId, isOwner]);

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

    return (
      <>
      <Global styles={globalStyles}/>
      <CardBody>
        <Header  showFavourites setShowFavourites />

      <MainContainer>
        
          <TopButtonsPanel isOwner={isOwner} favouritesBtnAction={handleFavouritesToggle} optionsBtnAction={handleEditModeToggle}/>

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
