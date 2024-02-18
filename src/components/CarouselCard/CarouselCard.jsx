import React from 'react'
import style from './Carousel.module.css'
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";

const CarouselCard = () => {
  return (
    <div className={style.container}>
        <div className={style.topSection}>
            <h1>Popular Hotels</h1>
            <div className={style.icons}>
                <button id={style.arrow}> <IoIosArrowBack /></button>
                <button id={style.arrow}> <IoIosArrowForward /></button>
           
            
            </div>
        </div>
    </div>
  )
}

export default CarouselCard