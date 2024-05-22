import React from "react";
import { StyledInput, Title } from "./open-card-title.styled";

export const OpenCardTitle = ({cardTitle, setCardTitle, isEditing}) => {

  return (
  <>
  {isEditing ? <StyledInput onChange={(e) => {cardTitle = e.target.value}} type="text" placeholder="Введите название карточки" defaultValue={cardTitle} maxLength={70} /> : <Title>{cardTitle}</Title>}
  </>
  )
}