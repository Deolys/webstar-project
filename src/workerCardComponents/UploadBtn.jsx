import React from "react";

import "./workerCardStyles/UploadBtnStyle.css";

export default function UploadBtn({isRel, bindAction}) {
    return <button className={isRel ? "upload-btn rel" : "upload-btn"} onClick={bindAction}></button>;
}