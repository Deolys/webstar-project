import React, { useState, useEffect } from "react";
import '../styles/normalize.css';
import '../styles/style.css';
import '../styles/card-styles.css';


import logo from '../assets/icons/logo.svg';
import starGreen from '../assets/icons/star-green.svg';
import favourites from '../assets/icons/favourites-btn.svg';
import options from '../assets/icons/settings-4-svgrepo-com.svg';
import buttonArrow from '../assets/icons/next-light-svgrepo-com.svg';

import background from '../assets/images/background-hills.png';
import profilePicture from 'src/assets/images/ivoryowl.jpg';
import sliderPicture from 'src/assets/images/Landing page.jpg';
import picture1 from 'src/assets/images/IdealLifeWork.jpg';
import picture2 from 'src/assets/images/Landing page designs.jpg';
import picture3 from'src/assets/images/MobileAppWork.jpg';

const Burger = ({ onHeaderLinksToggle }) => {
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

const Card = () => {
    const [isHeaderLinksOpen, setIsHeaderLinksOpen] = useState(false);
    const handleHeaderLinksToggle = () => {
      setIsHeaderLinksOpen(!isHeaderLinksOpen);
    }; 
    return (
      <>
      <body className="card-body">
      <header className="header">
      <div className="header__container">
        <a className="header__logo logo">
          <img className="logo__icon" src={logo}/>
        </a>
        
        <nav className={`header__links ${isHeaderLinksOpen ? 'change' : ''}`}>
          <a className="header__link favourites-link ">
              <img className="favourite-green__icon" src={starGreen} title="Избранное" aria-label="Избранное" />
              <span className="favourites-link__title">Избранное</span>
          </a>

          <a className="header__link my-card-link">
            <button className="my-card-btn">Моя карточка</button>
          </a>

          <a className="header__link logout-link ">
            <button className="logout-btn">Выйти</button>
          </a>

          <a className="header__link login-link hidden">
            <button className="login-btn">Войти</button>
          </a>

          <a className="header__link sign-up-link hidden">
            <button className="sign-up-btn">Зарегистрироваться</button>
          </a>



        </nav>
      <Burger onHeaderLinksToggle={handleHeaderLinksToggle}/>

      </div>
    </header>
      <main className="main-container">
      {/* <label className="container-label">Профиль пользователя</label> */}
          <div className="buttons-panel">
              <button className="angle-button options" title="Редактировать профиль" style={{visibility: 'hidden'}}>
                  <img src={options}/>
              </button>
              <button className="angle-button" title="Добавить в избранное">
                  <img src={favourites}/>
              </button>
          </div>
          <div className="photo-panel">
              <div className="slider">
              <button className="arrow-button" title="Предыдущее изображение">
                <img src = {buttonArrow}/>
              </button>
                  <div className="pagination-dots">
                      <span className="dot active"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                  </div>
                  <ul>
                      <li><img src={sliderPicture} alt="portfolio image 1" /></li>
                      <li><img src={sliderPicture} alt="portfolio image 2" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 3" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 4" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 5" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 6" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 7" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 8" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 9" style={{visibility: 'hidden'}}/></li>
                      <li><img src={sliderPicture} alt="portfolio image 10" style={{visibility: 'hidden'}}/></li>
                  </ul>
                  <button className="arrow-button right" title="Следующее изображение">
                    <img src = {buttonArrow}/>
                  </button>
              </div>
          </div>
          <div className="tags-panel">
              <span className="tag">Figma</span>
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
          </div>
  
          <div className="profile-container">
              <div className="profile-photo">
                  <img src={profilePicture} alt="profile image" />
              </div>
  
              <div className="image-backline-container">
                  <img src={background} alt="background image" />
              </div>
  
              <div className="profile-description">
                  <div className="username">Имя пользователя</div>
                  <div className="location">г. Казань</div>
                  <div className="bio">
                      <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Expedita nemo cumque, magni 
                          doloremque aspernatur illo nisi magnam! 
                          Perspiciatis, aspernatur excepturi dolores 
                          autem, ut sequi dolore vitae doloremque ratione 
                          expedita velit molestias quidem hic quod culpa 
                          corrupti vel ad voluptatum odit accusantium 
                          fugiat porro ducimus? Quibusdam, aliquid? Est 
                          aperiam non beatae.</p>
                  </div>
              </div>
          </div>
  
          <div className="content-container">
              <label className="container-label">Информация о работе пользователя</label>
              <section className="content-item">
                  <div className="item-photo">
                      <img src={picture1} alt="content image №1" />
                  </div>
                  <label>Desktop</label>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur eligendi accusantium possimus nihil rerum, voluptatum, quibusdam illo neque incidunt fugit nostrum iusto provident ipsa aliquam consectetur laborum, quas reprehenderit est! Quidem dolorem consectetur itaque quas corrupti, nam optio ullam amet asperiores repellendus rerum voluptate consequatur ducimus doloremque. Eum, in?</p>
                  
              </section>
  
              <section className="content-item">
                  <div className="item-photo">
                      <img src={picture2} alt="content image №2" />
                  </div>
                  <label>Mobile</label>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia omnis qui est doloremque accusantium ab! Suscipit cumque laboriosam perspiciatis error. Beatae neque nesciunt labore accusamus velit, numquam laborum adipisci asperiores facilis veniam hic id voluptatibus maiores libero, enim quia esse, fugiat temporibus cum voluptas!</p>
              </section>
              
              <section className="content-item">
                  <div className="item-photo">
                      <img src={picture3} alt="content image №3" />
                  </div>
                  <label>Design</label>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt tempore impedit iste? Suscipit, reprehenderit? Provident recusandae maxime aliquid accusantium quam tempora ipsa, necessitatibus fugit, non unde adipisci explicabo repudiandae vitae qui? Quibusdam deserunt ad nostrum ullam ipsam corporis illo dicta in, voluptatibus voluptatem quidem ipsum tenetur est laborum sed, quod similique distinctio voluptas illum repellat vero aperiam sunt dolore quas. Optio eos vitae at cum molestiae et libero illo natus eaque</p>
              </section>
          </div>
      </main>
      {/*<script src="scripts.js"></script>*/}
  </body>
        
      </>
    );
  };
  
  export default Card;