import React from "react";

import firstDisplay from '../../assets/icons/first-display.svg'
import secondDisplay from '../../assets/icons/second-display.svg'
import { ButtonsDiv, DisplaysTitle } from "./styled";

export function Displays() {
  return (
    <div className="sidebar__displays displays">
      <DisplaysTitle>Отображение</DisplaysTitle>
      <ButtonsDiv>
        <button
          className="double-column-btn"
          title="Разместить карточки в две колонки"
        >
          <img className="first-display__icon" src={firstDisplay} />
        </button>
        <button
          className="single-column-btn"
          title="Разместить карточки в одну колонку"
        >
          <img className="second-display__icon" src={secondDisplay} />
        </button>
      </ButtonsDiv>
    </div>
  );
}
