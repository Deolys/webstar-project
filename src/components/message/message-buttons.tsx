import React from "react";
import { Link } from "react-router-dom";

import { ButtonAccept, ButtonReject, ButtonView } from "./styled";
import { URLs } from "../../__data__/urls";

export function MessageButtons({id}) {

  return (
    <div className="message__buttons">
      <Link to={URLs.ui.cardDetail.getUrl(id)}>
        <ButtonView>Посмотреть</ButtonView>
      </Link>
      <ButtonAccept>Принять</ButtonAccept>
      <ButtonReject>Отклонить</ButtonReject>
    </div>
  );
}
