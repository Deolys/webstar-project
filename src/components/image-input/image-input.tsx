import React from "react";

import { StyledInput } from "./image-input.styled";

export default function ImageInput({reference, onChange}) {
    return (
        <StyledInput ref={reference} onChange={onChange} type="file" accept="image/*"/>
    );
}
