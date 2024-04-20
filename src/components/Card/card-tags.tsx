import React from "react";
import { Tag, TagsDiv } from "./styled";

export function CardTags({tags, selectedTags}) {
  return (
    <TagsDiv>
      {tags.map((tag, index) => (
        <Tag key={index} isSelected={selectedTags && selectedTags.includes(tag)}>{tag}</Tag>
      ))}
    </TagsDiv>
  );
}
