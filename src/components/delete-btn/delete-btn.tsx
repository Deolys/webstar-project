import React from "react";

import {StyledDeleteBtn} from './delete-btn.styled';

export default function DeleteBtn({bindAction}) {
    return <StyledDeleteBtn onClick={bindAction}></StyledDeleteBtn>;
}

DeleteBtn.defaultProps = {
   bindAction: () => {}
}
