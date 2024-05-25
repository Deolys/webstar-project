import React, { useState, useRef, useEffect } from "react";

import { UploadBtn } from "../upload-btn";
import { ImageInput } from "../image-input";

import {
    ProfileContainer, 
    ProfilePhoto, 
    ProfileDescription, 
    Username, 
    Location, 
    StyledTextarea, 
    StyledP, 
    Background, 
    StyledInput
} from "./profile-info.styled";

import { cardPreviews } from "../../assets/images";

export default function ProfileInfo({profileData, isEditing}) {
    const [profileImage, setProfileImage] = useState(cardPreviews[profileData.profilePicture]);
    const [backgroundImage, setBackgroundImage] = useState(cardPreviews[profileData.backgroundImage]);

    useEffect(() => {
        if (profileData && profileData.profilePicture && cardPreviews[profileData.profilePicture]) {
                setProfileImage(cardPreviews[profileData.profilePicture]);
            }
      }, [profileData.profilePicture]);

      useEffect(() => {
        if (profileData && profileData.backgroundImage && cardPreviews[profileData.backgroundImage]) {
                setBackgroundImage(cardPreviews[profileData.backgroundImage]);
            }
      }, [profileData.backgroundImage]);

    const profileImgInputRef = useRef(null);
    const backgroundImgInputRef = useRef(null);

    const handleProfileUrlChange = (e) => {
        profileData.profilePicture = URL.createObjectURL(e.target.files[0]);
        setProfileImage(profileData.profilePicture);
        profileImgInputRef.current.value = '';
      }

    const handleBackgroundUrlChange = (e) => {
        profileData.backgroundImage = URL.createObjectURL(e.target.files[0]);
        setBackgroundImage(profileData.backgroundImage);
        backgroundImgInputRef.current.value = '';
    }

    return (
        <ProfileContainer>
              <ProfilePhoto>
                    <img src={profileImage} alt="Фотография профиля" />

                    {isEditing && <UploadBtn bindAction={()=>profileImgInputRef.current.click()}/>}

                    {isEditing && <ImageInput reference={profileImgInputRef} onChange={handleProfileUrlChange}/>}
              </ProfilePhoto>
  
              <Background>
                    <img src={backgroundImage} alt="Фоновое изображение профиля" />

                    {isEditing&&<UploadBtn bindAction={()=>backgroundImgInputRef.current.click()}/>}

                    {isEditing&&<ImageInput reference={backgroundImgInputRef} onChange={handleBackgroundUrlChange}/>}
              </Background>
  
              <ProfileDescription>
                <Username>{profileData.name}</Username>
                
                
                    {isEditing ?
                        <>
                            <StyledInput 
                            maxLength={50}
                            placeholder="Город" 
                            defaultValue={profileData.geolocation} 
                            type="text" 
                            onChange={(e) => {profileData.geolocation = e.target.value}}/>

                            <StyledTextarea 
                            maxLength={350} 
                            placeholder="Напишите что-нибудь о себе" 
                            defaultValue={profileData.description} onChange={(e) => {profileData.description = e.target.value}}/>
                        </> 
                        : 
                        <>
                            <Location>{profileData.geolocation}</Location>
                            <StyledP>{profileData.description}</StyledP>
                        </>}
              </ProfileDescription>
        </ProfileContainer>
    );
}
