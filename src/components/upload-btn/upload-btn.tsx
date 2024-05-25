import React from "react";

import { StyledUploadBtn } from './upload-btn.styled';

export default function UploadBtn({isRel, bindAction}) {
    return <StyledUploadBtn isRel={isRel} onClick={bindAction} title='Добавить'></StyledUploadBtn>;
}

UploadBtn.defaultProps = {
    isRel:false,
   bindAction: () => {}
}
