import React, {useState} from "react";

import {UploadBtn} from "../upload-btn";
import {DeleteBtn} from "../delete-btn";

import {StyledTagsPanel, Tag, RemoveTagBtn} from "./tags-panel.styled";

export default function TagsPanel({initialTags, isEditing}) {
    const [tags, setTags] = useState(initialTags || []);

    const addTag = (tagName) => {
        tags.length <5 &&setTags([...tags, tagName]);
    };

    const removeTag = (index) => () => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };
    
    return (
        <StyledTagsPanel>
            {isEditing && <UploadBtn isRel={true} bindAction={() => addTag("New tag")} />}
            {tags.map((tag, index) => {return (
                <Tag key={index}>
                    {tag} 
                    {isEditing && 
                    <RemoveTagBtn title='Удалить тэг'>
                        <DeleteBtn bindAction={removeTag(index)}/>
                    </RemoveTagBtn>}
                </Tag>)
                }
            )}
        </StyledTagsPanel>
    );
}
