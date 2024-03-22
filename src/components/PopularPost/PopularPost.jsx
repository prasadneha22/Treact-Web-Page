import React from "react";
import style from "./Popular.module.css";
// import {recentList, posts} from '.../Popular/PopularData.json'
// import {posts} from '../Popular/PopularData.json'
import {recentList, posts}  from '../../Popular/PopularData.json';

const PopularPost = () => {

  
  return (
    <div className={style.top}>
      <div className={style.popularPosts}>
        <h1 className={style.popularHeading}>Popular Posts</h1>
        <div className={style.firstPart}>
          {posts.map((val, k) => (
            <div className={style.cardContainer} key={k}>
              <div className={style.imgHeading}>
                <img className={style.cardImage} src={val.img} />
                <p className={style.subHeading}>{val.text}</p>
              </div>
              <p className={style.secH}>{val.para}</p>
              <div className={style.profile}>
                <img src={val.profilePic} />
                <div className={style.info}>
                  <p>{val.name}</p>
                  <span>{val.prof}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>

      <div className={style.recent}>
        <h1 className={style.recentHead}>Recent Posts</h1>
        {
          recentList.map((values,idx)=>(
            <div className={style.list}>
              <div className={style.text}>
                <h3>{values.desc}</h3>
                <p>{values.nam}</p>
              </div>
              <div className={style.photos}>
                <img src={values.photo} alt="" />
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  );
};

export default PopularPost;
