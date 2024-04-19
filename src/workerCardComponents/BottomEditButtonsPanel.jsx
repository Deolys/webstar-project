import React from "react";

import "./workerCardStyles/BottomEditButtonsPanelStyle.css";

export default function BottomEditButtonsPanel({isEditing, cancelBtnAction, finishBtnAction}) {
    return (
        <>{isEditing&&<div className="bottom-bar">
                <button className="manipulate-btn cancel" title="Отменить изменения" alt="Отменить изменения" onClick={cancelBtnAction}>
                    Отменить изменения
                </button>

                <button className="manipulate-btn accept" title="Завершить редактирование" alt="Завершить редактирование" onClick={finishBtnAction}>
                    Готово
                </button>
        </div>}</>
    );
}