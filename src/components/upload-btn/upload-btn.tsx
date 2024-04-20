import React from "react";

import {StyledUploadBtn} from './upload-btn.styled';

export default function UploadBtn({isRel, bindAction}) {
    return <StyledUploadBtn isRel={isRel} onClick={bindAction}></StyledUploadBtn>;
}

UploadBtn.defaultProps = {
    isRel:false,
   bindAction: () => {}
}
