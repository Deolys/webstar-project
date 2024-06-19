import React from "react";
import { StyledError } from "./error-sign.styled";

export function ErrorSign ({text}) {
   return (
    <StyledError>{text}</StyledError>
   )
}