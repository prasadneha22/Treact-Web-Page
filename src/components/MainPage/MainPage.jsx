import React from 'react';
import style from './MainPage.module.css';

function MainPage() {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <nav>
          <div className={style.logo}>
            <img className={style.logoImg} src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
            Treact
          </div>
          <div className={style.listItem}>
            <a href="#"><div className={style.item}>About</div></a>
            <a href="#"><div className={style.item}>Blog</div></a>
            <a href="#"><div className={style.item}>Pricing</div></a>
            <a href="#"><div className={style.item}>Login</div></a>
          </div>
        </nav>
        <div className={style.content}>
          <div className={style.heading}>
            <h1>Find Perfect Hotels <br /> <span>anywhere you go.</span></h1>
          </div>
          <div className={style.para}>
            <p>We've been in the hotels business across the world <br /> for 5 years now. We assure you that you will always <br /> enjoy your stay with us.</p>
          </div>
          <div className={style.btns}>
            <button id={style.sign}>Sign Up</button>
            <button id={style.search}>Search Hotels</button>
          </div>
        </div>
      </div>
      <div className={style.heroImage}>
        <img className={style.heroImageInner} src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75" alt="" />
      </div>
    </div>
  );
}

export default MainPage;
