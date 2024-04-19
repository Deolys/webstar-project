import React, {useState, useEffect} from "react";
import UploadBtn from "./UploadBtn.jsx";

import './workerCardStyles/TagsPanelStyle.css';

export default function TagsPanel({initialTags, isEditing}) {
    const [tags, setTags] = useState(initialTags || []);

    const addTag = (tagName) => {
        tags.length <5 &&setTags([...tags, tagName]);
    };

    // useEffect(() => {
    //     console.log("Updated tags:", tags);
    //   }, [tags]);

    return (
        <div className="tags-panel" >
            {isEditing && <UploadBtn isRel={true} bindAction={() => addTag("New tag")}/>}
            {tags.map((tag, index) => {return (
                <Tag key={index} name={tag} />)}
            )}
        </div>
    );
    
}

function Tag({ name }) {
    return <span className="tag">{name}</span>;
  }