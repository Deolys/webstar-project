import React, {useState} from "react";

import {StyledTagsPanel, Tag, RemoveTagBtn} from "./tags-panel.styled";

const allTags = ["Сайты", "Десктоп", "Дизайн", "Под ключ", "Мобильные устройства", "Вёрстка"];

export default function TagsPanel({tags, setTags, isEditing}) {
    
    const toggleTag = (tag) => () => {
        const newTags = [...tags];
        if (newTags.includes(tag)) {
            newTags.splice(newTags.indexOf(tag), 1);
        } 
        else if (newTags.length < 3) {
            newTags.push(tag);
        }
        setTags(newTags);
    }
    return (
        <StyledTagsPanel>
            {(isEditing ? allTags : tags).map((tag, index) => {
                return (
                    <Tag key={index} isSelected={(tags || []).includes(tag)} onClick={isEditing ? toggleTag(tag) : ()=>{}}>
                        {tag}
                    </Tag>
                )
                }
            )}
        </StyledTagsPanel>
    );
}
