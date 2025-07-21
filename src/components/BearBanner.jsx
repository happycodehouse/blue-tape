import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from "./bearBanner.module.scss";
import figure from "/src/assets/images/main/bear-motorcycle.svg";

const BearBanner = () => {
  const [images, setImages] = useState([]);
  const massesRef = useRef([]);
  
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Array.from({ length: 10 }, async (_, i) => {
        try {
          const module = await import(`/src/assets/images/main/mass-${String(i + 1).padStart(2, '0')}.svg`);
          return module.default;
        } catch (error) {
          console.error(`Failed to load image mass-${String(i + 1).padStart(2, '0')}.svg:`, error);
          return null; // 로딩 실패시 null 반환
        }
      });
      
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null)); // null 제거
    };
    
    loadImages();
  }, []);
  
  useEffect(() => {
    if (images.length === 10) {
      gsap.from(massesRef.current, {
        // 애니메이션 설정
      });
    }
  }, [images]);
  
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
            ref={el => massesRef.current[index] = el}
          />
        ))}
      </div>
    </div>
  );
}

export default BearBanner;