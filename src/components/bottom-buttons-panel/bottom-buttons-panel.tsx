import React from "react";

import { BottomBar, ManipulateBtn } from './bottom-buttons-panel.styled'

export default function BottomButtonsPanel({isEditing, cancelBtnAction, finishBtnAction}) {
    return (
        <>{isEditing&&<BottomBar>
                <ManipulateBtn className='cancel' title="Отменить изменения" onClick={cancelBtnAction}>
                    Отменить изменения
                </ManipulateBtn>

                <ManipulateBtn className='accept' title="Завершить редактирование" onClick={finishBtnAction}>
                    Готово
                </ManipulateBtn>
        </BottomBar>}</>
    );
}
