import React from "react";

import { Ellipse, StyledEllipses } from "./ellipses.styled";

export default function Ellipses({count}){
    return(
        <StyledEllipses>
            {Array.from({length: count}, (_, i) => (
                <Ellipse key={i}/>
            ))}
        </StyledEllipses>
    )
}
