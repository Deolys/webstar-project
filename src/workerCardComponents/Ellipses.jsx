import React from "react";
import Ellipse from "./Ellipse.jsx";

import "./workerCardStyles/EllipsesStyle.css";

export default function Ellipses({count}){
    return(
        <div className="ellipses">
            {Array.from({length: count}, (_, i) => (
                <Ellipse key={i} />
            ))}
        </div>
    )
}