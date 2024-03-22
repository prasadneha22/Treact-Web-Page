import React from 'react'
import style from './Footer.module.css'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
        <div className={style.news}>
            <div className={style.newsLetter}>
                <svg viewBox="0 0 64 64" class="sc-fbPSWO jCQXa"><g fill-rule="evenodd" stroke="currentColor" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M7095 7523l142 58 2 386h-636l-3-386 144-58" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M6603 7967l318-232 318 232" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-width="20.8346" d="M6603 7581l257 198M7239 7581l-259 197" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="20.8346" d="M6746 7689v-273h348v276M6853 7474h193M6792 7541h254M6792 7608h254M6792 7675h254" transform="matrix(.0922 0 0 .09295 -605.96046 -682.9347)"></path></g></svg>
            <div className={style.texts}>
                <h1>Newsletter</h1>
                <p>Subscribe now to get our latest blog posts.</p>
            </div>
            </div>
            <form >
                <input type="email" placeholder='Your Email Address' />
                <button onClick={(e)=>e.preventDefault()} type='submit'>Subscribe Now</button>
            </form>
           
        </div>
        <div className={style.otherInfo}>
            <div className={style.logo}>
                <img src="https://treact.owaiskhan.me/static/media/logo.2c489fc453a1783cbadacf914efa3df6.svg" alt="" />
                <span>Treact</span>
            </div>
            <div className={style.list}>
            <a href="#"><div className={style.item}>Home</div></a>
            <a href="#"><div className={style.item}>About</div></a>
            <a href="#"><div className={style.item}>Contact Us</div></a>
            <a href="#"><div className={style.item}>Blog</div></a>
            <a href="#"><div className={style.item}>Reviews</div></a>
          </div>
          <div className={style.socialIcons}>
            <div className={style.icons}><RiFacebookFill/></div>
          
          <div className={style.icons}><FaTwitter/></div>
          <div className={style.icons}><FaYoutube /></div>
          
          </div>
          <div className={style.watermark}>
            <p>© Copyright 2020, Treact Inc. All Rights Reserved.</p>
          </div>
                 
        </div>
    </div>
  )
}

export default Footer