import React from 'react'
import style from './Service.module.css'

const Service = () => {
    
  return (
    <div className={style.mainContainer}>
        <div className={style.image}>
            <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
        </div>
        <div className={style.contentContainer}>
        <div className={style.content}>
            <h1>We have the best <br />service.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur distinctio repellat eligendi rerum, aspernatur, harum labore quisquam esse dolores, qui repudiandae omnis nobis cum alias illo commodi quibusdam dolorem aliquid. </p>
        </div>
        <div className={style.card}>
            <div className={style.cardItem}>
                <span>192</span>
                <p>Countries</p>
            </div>
            <div className={style.cardItem}>
                <span>479</span>
                <p>Hotels</p>
            </div>
            <div className={style.cardItem}>
                <span>2093</span>
                <p>Rooms</p>
            </div>
            <div className={style.cardItem}>
                <span>10347</span>
                <p>Workers</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Service