import React, { useState, useEffect } from "react";

export function Burger ({ onHeaderLinksToggle }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    onHeaderLinksToggle();
  };  

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isBurgerOpen && !e.target.closest('.burger') && !e.target.closest('.header__links')) {
        setIsBurgerOpen(false);
        onHeaderLinksToggle();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isBurgerOpen]);

  return (
    <>
      <div id="burger" className={`burger ${isBurgerOpen ? 'change' : ''}`} onClick={handleBurgerClick}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <div className={`burger-bg__content ${isBurgerOpen ? 'change' : ''}`}>
        <div id="burger-bg" className={`burger-bg ${isBurgerOpen ? 'change-bg' : ''}`}></div>
      </div>
    </>
  );
};