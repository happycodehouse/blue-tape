import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from "./bearBanner.module.scss";
import figure from "/src/assets/images/main/bear-motorcycle.svg";

const BearBanner = () => {
  const images = Array.from({ length: 10 }, (_, i) =>
    `/src/assets/images/main/mass-${String(i + 1).padStart(2, '0')}.svg`
  );
  
  const massesRef = useRef([]);
  
  
  return (
    <div className={styles.wrap}>
      <div className={styles.figure}>
        <img src={figure} alt=""/>
      </div>
      
      <div className={styles.mass_wrap}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={styles[`mass_item${String(index + 1).padStart(2, '0')}`]}
          />
        ))}
        
      </div>
    </div>
  );
}

export default BearBanner;