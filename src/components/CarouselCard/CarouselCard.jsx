import React,{useRef} from 'react'
import style from './Carousel.module.css'
import { IoIosArrowForward ,IoIosArrowBack } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";

const CarouselCard = ({data}) => {

  const boxRef = useRef(null);
  

  const handlePrev = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft -= boxRef.current.clientWidth;
    }
  };

  const handleNext = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft += boxRef.current.clientWidth;
    }
  };

  return (
    <div className={style.container}>
        <div className={style.topSection}>
            <h1>Popular Hotels</h1>
            <div className={style.icons}>
                <button onClick={handlePrev} id={style.arrow}> <IoIosArrowBack  /></button>
                <button onClick={handleNext}  id={style.arrow}> <IoIosArrowForward  /></button>
            </div>
        </div>
        <div className={style.carouselCard} ref={boxRef}>
          {
            data.map((item,index)=>(
             
              <div key={index} className={style.cardContainer}  >
                <img className={style.carouselImage} src={item.src} alt="" />
                <div className={style.OuterContainer}>
                <div className={style.cardContent}>
                  <h3>{item.title} <span><GoStarFill style={{color:"#f2b211",fontSize:"23px"}}/> {item.rating}</span></h3>
                  <div className={style.location}>
                    <div className={style.innerLocation}><div className={style.locationIcon}><TiLocationOutline style={{fontSize:"16px",color:"white", textAlign:"center"}} /></div>{item.place}</div>
                    <div className={style.innerLocation}><div className={style.dollarIcon}><BiDollar style={{color:"white"}} /></div>{item.usd}</div>
                    
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur laudantium cupiditate. Laboriosam dolor iure dignissimos et, natus similique sint </p>
                  
                  </div>
                  <div className={style.bookButton}>
                  Book Now
                  </div>
                  
                </div>
              </div>
              
            ))
          }
          </div>
        </div>
          
              
            
    
  )
}

export default CarouselCard