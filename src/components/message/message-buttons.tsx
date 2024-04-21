import React from "react";

import { ButtonAccept, ButtonReject, ButtonView } from "./styled";

export function MessageButtons() {
  return (
    <div className="message__buttons">
      <ButtonView>Смотреть</ButtonView>
      <ButtonAccept>Принять</ButtonAccept>
      <ButtonReject>Отклонить</ButtonReject>
    </div>
  );
}
