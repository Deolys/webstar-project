import React from "react";

import UploadBtn from "./UploadBtn.jsx";

import "./workerCardStyles/ProfileContainerStyle.css";

export default function ProfileContainer({profileData, isEditing}) {
    return (
        <div className="profile-container">
              <div className="profile-photo">
                {profileData.profilePicture ? 
                    <img src={profileData.profilePicture} srcSet={profileData.profilePicture} alt="Фотограция профиля" />
                    : isEditing&&<UploadBtn/>}
              </div>
  
              <div className="image-backline-container">
                {profileData.backgroundImage ? 
                    <img src={profileData.backgroundImage} alt="Фоновое изображение профиля" />
                    : isEditing&&<UploadBtn/>}
              </div>
  
              <div className="profile-description">
                <span className="username">{profileData.name}</span>
                <span className="location">{profileData.geolocation}</span>
                    {isEditing ? 
                        <textarea maxLength={350} placeholder="Напишите что-нибудь о себе" 
                        defaultValue={profileData.description} onChange={(e) => {profileData.description = e.target.value}}/>
                        : <p>{profileData.description}</p>}
              </div>
        </div>
    );
}