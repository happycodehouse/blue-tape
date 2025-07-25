import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import style from "./bearBanner.module.scss";

import figure from "/src/assets/images/main/bear-motorcycle.svg";
import mass01 from "/src/assets/images/main/mass-01.svg";
import mass02 from "/src/assets/images/main/mass-02.svg";
import mass03 from "/src/assets/images/main/mass-03.svg";
import mass04 from "/src/assets/images/main/mass-04.svg";
import mass05 from "/src/assets/images/main/mass-05.svg";
import mass06 from "/src/assets/images/main/mass-06.svg";
import mass07 from "/src/assets/images/main/mass-07.svg";
import mass08 from "/src/assets/images/main/mass-08.svg";
import mass09 from "/src/assets/images/main/mass-09.svg";
import mass10 from "/src/assets/images/main/mass-10.svg";

const BearBanner = () => {
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
      <div className={style.mass_wrap}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={style[`mass_item${String(index + 1).padStart(2, '0')}`]}
            ref={el => massesRef.current[index] = el}
          />
        ))}
      </div>
    </div>
  );
}

export default BearBanner;