import React from "react";
import favourites from '../assets/icons/favourites-btn.svg';
import options from '../assets/icons/settings-4-svgrepo-com.svg';

import './workerCardStyles/TopButtonsPanelStyle.css';

export default function TopButtonsPanel({isOwner, optionsBtnAction, favouritesBtnAction}){
    return (
        <div className="buttons-panel">
            {isOwner ? 
        
              (<button className="angle-button options" title="Редактировать профиль" alt="Редактировать профиль" onClick={optionsBtnAction}>
                  <img src={options}/>
              </button>):
              (<button className="angle-button" title="Добавить в избранное" alt="Добавить в избранное" onClick={favouritesBtnAction}>
                  <img src={favourites}/>
              </button>)
            }
        </div>
    );
}