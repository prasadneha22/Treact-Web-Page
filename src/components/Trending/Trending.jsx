import React from 'react'
import style from './Trending.module.css'
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosTrendingUp } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Trending = ({datas}) => {
  return (
    <div className={style.mainContainer}>
        <div className={style.heading}>
            <h1>Trending Tours</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sed culpa odit amet, ducimus eligendi perferendis corrupti numquam magnam quos?</p>
            <div className={style.view}>
                View All Tours <FaArrowRightLong  style={{fontSize:"1.5rem",fontWeight:"200"}}/>
            </div>
        </div>
        <div className={style.card}>
            {
                datas.map((itm,index)=>(
                    <div key={index} className={style.cardContainer}>
                        <div className={style.imageContainer}>
                            <img src={itm.img} alt="image" />
                        </div>
                        <div className={style.contentContainer}>
                            <div className={style.firstLine}>
                                <h3>{itm.title}</h3>
                                <h4><BsCurrencyDollar style={{fontWeight:"800"}}/>{itm.price} <span>per day</span></h4>
                            </div>
                            <div className={style.description}>{itm.des}</div>
                            <div className={style.lastContainer}>
                                <div className={style.icons}>
                                <IoIosTrendingUp style={{fontSize:"25px",color:"#557087"}} />
                                <span>TRENDING</span>
                                </div>
                                <div className={style.icons}>
                                <GoClock style={{fontSize:"22px",color:"#557087"}}/>
                                <span>{itm.tour}</span>
                                </div>
                                <div className={style.icons}>
                                <CiLocationOn style={{fontSize:"22px",color:"#557087"}}/>
                                <span>{itm.country}</span>
                                </div>
                            </div>
                            <div className={style.bookNow}>Book Now</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Trending