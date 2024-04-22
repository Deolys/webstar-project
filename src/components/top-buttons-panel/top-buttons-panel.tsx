import React from "react";
import favourites from '../../assets/icons/favourites-btn.svg';
import options from '../../assets/icons/settings-4-svgrepo-com.svg';

import {StyledTopButtonsPanel, AngleButton} from './top-buttons-panel.styled';

export default function TopButtonsPanel({isOwner, optionsBtnAction, favouritesBtnAction}){
    return (
        <StyledTopButtonsPanel>
            {isOwner ? 
        
              (<AngleButton title="Редактировать профиль" onClick={optionsBtnAction}>
                  <img src={options}/>
              </AngleButton>):
              (<AngleButton floatRight={true} title="Добавить в избранное" onClick={favouritesBtnAction}>
                  <img src={favourites}/>
              </AngleButton>)
            }
        </StyledTopButtonsPanel>
    );
}
