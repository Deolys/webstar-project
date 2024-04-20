import React, {useState} from "react";

import {UploadBtn} from "../upload-btn";

import {StyledTagsPanel, Tag} from "./tags-panel.styled";

export default function TagsPanel({initialTags, isEditing}) {
    const [tags, setTags] = useState(initialTags || []);

    const addTag = (tagName) => {
        tags.length <5 &&setTags([...tags, tagName]);
    };

    return (
        <StyledTagsPanel>
            {isEditing && <UploadBtn isRel={true} bindAction={() => addTag("New tag")} />}
            {tags.map((tag, index) => {return (
                <Tag key={index}>{tag}</Tag>)}
            )}
        </StyledTagsPanel>
    );
}
