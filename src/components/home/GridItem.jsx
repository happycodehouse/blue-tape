import { useCallback, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLightboxLenis } from '../../hooks/useLightboxLenis';
import style from "./gridItem.module.scss";

const GridItem = ({ type, linkTo, image, title, subtitle, year }) => {
  useLightboxLenis();
  
  const [overlayStyle, setOverlayStyle] = useState({});
  const itemRef = useRef(null);
  const timeoutRef = useRef(null);
  
  const getDirection = useCallback((event, element) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    
    const distanceToLeft = x;
    const distanceToRight = width - x;
    const distanceToTop = y;
    const distanceToBottom = height - y;
    
    const minDistance = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);
    
    if (minDistance === distanceToLeft) return 'left';
    if (minDistance === distanceToRight) return 'right';
    if (minDistance === distanceToTop) return 'top';
    if (minDistance === distanceToBottom) return 'bottom';
  }, []);
  
  // 마우스 엔터 핸들러
  const handleMouseEnter = useCallback((e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const direction = getDirection(e, itemRef.current);
    
    // 초기 위치 설정 (트랜지션 없이)
    const initialTransform = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)'
    };
    
    setOverlayStyle({
      opacity: '0.9',
      transform: initialTransform[direction],
      transition: 'none'
    });
    
    // 애니메이션 시작 (원본과 동일한 10ms)
    timeoutRef.current = setTimeout(() => {
      setOverlayStyle(prev => ({
        ...prev,
        transform: 'translate(0, 0)',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }));
    }, 10);
  }, [getDirection]);
  
  // 마우스 리브 핸들러
  const handleMouseLeave = useCallback((e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // 나가는 시점의 방향을 다시 계산 (원본과 동일)
    const direction = getDirection(e, itemRef.current);
    
    const exitTransform = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)'
    };
    
    setOverlayStyle(prev => ({
      ...prev,
      transform: exitTransform[direction]
    }));
    
    // 400ms 후 opacity 0으로 변경 (원본과 동일)
    timeoutRef.current = setTimeout(() => {
      setOverlayStyle({
        opacity: '0',
        transform: exitTransform[direction],
      });
    }, 400);
  }, [getDirection]);
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  const commonProps = {
    className: style.gridItem,
    ref: itemRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
  
  // 링크 타입
  if (type === "link") {
    if (!linkTo) return null;
    
    return (
      <div {...commonProps}>
        <Link to={linkTo}>
          <div className={style.overlay} style={overlayStyle} />
          <span>{title}</span>
        </Link>
      </div>
    );
  }
  
  // 이미지 타입
  return (
    <div {...commonProps} data-uk-lightbox>
      <a href={image} data-type="image">
        <div className={style.overlay} style={overlayStyle} />
        <div className={style.content}>
          <div className={style.desc}>
            <em>{year}</em>
            <div className={style.title}>
              <span>{title}</span>
              <span>{subtitle}</span>
            </div>
          </div>
          <img src={image} alt={`${title} - ${subtitle}`} />
        </div>
      </a>
    </div>
  );
};

export default GridItem;