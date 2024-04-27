import React from "react";

import { InputBox } from './form-input.styled';

export function FormInput({ type, placeholder }) {
  return <InputBox type={type} placeholder={placeholder} />;
}
