import React from "react";

import { InputBox } from './form-input.styled';

export function FormInput({ type, placeholder, inputValue, onChange, name }) {
  return <InputBox type={type}
                   name={name}
                   placeholder={placeholder}
                   value={inputValue}
                   onChange={onChange} required
                   
  />;
}
