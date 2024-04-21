import React from "react";
import { CategoriesTitle, Tag, TagsDiv } from "./styled";

const tagsArray = ["Сайты", "Десктоп", "Дизайн", "Под ключ", "Мобильные устройства", "Вёрстка"];

export function Categories({selectedTags, setSelectedTags}) {

  const toggleTag = (tag: string) => {
    if (selectedTags && selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((c) => c !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div className="sidebar__categories categories">
      <CategoriesTitle>Категории</CategoriesTitle>
      <TagsDiv>
        {tagsArray.map((item: string, index: number) => (
          <Tag key={index} isSelected={(selectedTags || []).includes(item)} onClick={() => toggleTag(item)}>{item}</Tag>
        ))}
      </TagsDiv>
    </div>
  );
}