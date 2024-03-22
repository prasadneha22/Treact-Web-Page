import React from 'react'
import style from './Testimonials.module.css';
import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";


const Testimonials = () => {
  return (
    <div className={style.mainContainer}>
        <div className={style.leftPart}>
            <div className={style.topPart}>
            <h1>Testimonials</h1>
            <p>Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={style.bottomPart}>
            <p><BiSolidQuoteAltLeft style={{color:"#6e34eb"}}/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. <BiSolidQuoteAltRight style={{color:"#6e34eb"}}/> </p>
            <div className={style.profile}>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80" alt="" />
                <div className={style.profileSection}>
                    <h2>Charlotte Hale</h2>
                    <p>CEO, Delos Inc.</p>
                </div>
            </div>
            </div>
        </div>
        <div className={style.rightPart}>
        <div className={style.arrow}>
            <button ><IoIosArrowBack style={{fontSize:"18px"}} /></button>
            <button ><IoIosArrowForward style={{fontSize:"18px"}}/></button>
        </div>
            <img src="https://images.unsplash.com/photo-1523952578875-e6bb18b26645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
           
        </div>
        
    </div>
  )
}

export default Testimonials