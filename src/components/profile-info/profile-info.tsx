import React from "react";

import {UploadBtn} from "../upload-btn";

import {ProfileContainer, ProfilePhoto, ProfileDescription, Username, Location, StyledTextarea, StyledP, Background} from "./profile-info.styled";

export default function ProfileInfo({profileData, isEditing}) {
    return (
        <ProfileContainer>
              <ProfilePhoto>
                {profileData.profilePicture ? 
                    <img src={profileData.profilePicture} srcSet={profileData.profilePicture} alt="Фотограция профиля" />
                    : isEditing&&<UploadBtn/>}
              </ProfilePhoto>
  
              <Background>
                {profileData.backgroundImage ? 
                    <img src={profileData.backgroundImage} alt="Фоновое изображение профиля" />
                    : isEditing&&<UploadBtn/>}
              </Background>
  
              <ProfileDescription>
                <Username>{profileData.name}</Username>
                <Location>{profileData.geolocation}</Location>
                    {isEditing ? 
                        <StyledTextarea maxLength={350} placeholder="Напишите что-нибудь о себе" 
                        defaultValue={profileData.description} onChange={(e) => {profileData.description = e.target.value}}/>
                        : <StyledP>{profileData.description}</StyledP>}
              </ProfileDescription>
        </ProfileContainer>
    );
}
