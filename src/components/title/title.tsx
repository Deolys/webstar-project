import React from "react";
import { MainTitle } from "./styled";

export function Title(props) {
  return <MainTitle letterSpace={props.letterSpace}>{props.children}</MainTitle>
}