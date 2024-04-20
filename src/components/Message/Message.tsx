import React from "react";
import { MessageButtons } from "./MessageButtons";
import { MessageDiv, MessageNum, Title } from "./styled";

export function Message({ number, title }) {
  return (
    <MessageDiv>
      <MessageNum>#{number}</MessageNum>
      <Title>{title}</Title>
      <MessageButtons />
    </MessageDiv>
  );
}
