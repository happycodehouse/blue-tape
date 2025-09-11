import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import style from "./bearAnimation.module.scss";
import figure from "/src/assets/images/main/bear-motorcycle.png";
import mass01 from "/src/assets/images/main/mass-01.png";
import mass02 from "/src/assets/images/main/mass-02.png";
import mass03 from "/src/assets/images/main/mass-03.png";
import mass04 from "/src/assets/images/main/mass-04.png";
import mass05 from "/src/assets/images/main/mass-05.png";
import mass06 from "/src/assets/images/main/mass-06.png";
import mass07 from "/src/assets/images/main/mass-07.png";
import mass08 from "/src/assets/images/main/mass-08.png";
import mass09 from "/src/assets/images/main/mass-09.png";
import mass10 from "/src/assets/images/main/mass-10.png";

const BearAnimation = () => {
  const images = [mass01, mass02, mass03, mass04, mass05, mass06, mass07, mass08, mass09, mass10];
  const massesRef = useRef([]);
  const animationsRef = useRef([]);
  
  useEffect(() => {
    const animateIndices = [1, 2, 4, 5, 6, 7, 8, 9];
    
    animateIndices.forEach((idx) => {
      const element = massesRef.current[idx];
      if (element) {
        const animation = gsap.to(element, {
          x: "-=25",
          y: "+=50",
          duration: 4 + Math.random() * 2,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: idx * 0.3,
        });
        
        animationsRef.current[idx] = animation;
      }
    });
    
    return () => {
      animationsRef.current.forEach(animation => {
        if (animation) animation.kill();
      });
    };
  }, []);
  
  return (
    <div className={style.wrap}>
      <div className={style.figure}>
        <img src={figure} alt=""/>
      </div>
      <div className={style.massWrap}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={style[`massItem${String(index + 1).padStart(2, "0")}`]}
            ref={el => massesRef.current[index] = el}
          />
        ))}
      </div>
    </div>
  );
}

export default BearAnimation;