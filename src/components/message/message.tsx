import React from "react";
import { MessageButtons } from "./message-buttons";
import { MessageDiv, MessageNum, Title } from "./styled";

export function Message({ number, title }) {
  return (
    <MessageDiv>
      <MessageNum>#{number}</MessageNum>
      <Title>{title}</Title>
      <MessageButtons id={number}/>
    </MessageDiv>
  );
}
