import React, { useState } from "react";

import firstDisplay from '../../assets/icons/first-display.svg'
import secondDisplay from '../../assets/icons/second-display.svg'
import { ButtonsDiv, DisplaysTitle, DisplaysBlock } from "./styled";

export function Displays({setCardsInOneColumn}) {
  const [oneColumn, setOneColumn] = useState(false);

  const handleCardsInOneColumnChange = () => {
    setCardsInOneColumn((prevDisplays) =>!prevDisplays);
    setOneColumn((prevDisplays) =>!prevDisplays);
  }

  return (
    <DisplaysBlock>
      <DisplaysTitle>Отображение</DisplaysTitle>
      <ButtonsDiv>

        { oneColumn ?
          <button
          onClick={handleCardsInOneColumnChange}
          title="Разместить карточки в две колонки"
        >
          <img src={firstDisplay} alt="Отображение в две колонки"/>
        </button>
        :
        <button
          onClick={handleCardsInOneColumnChange}
          title="Разместить карточки в одну колонку"
        >
          <img src={secondDisplay} alt="Отображение в одну колонку" />
        </button>}
      </ButtonsDiv>
    </DisplaysBlock>
  );
}
