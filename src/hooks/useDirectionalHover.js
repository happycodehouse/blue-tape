import { useCallback, useRef, useState, useEffect } from "react";

/**
 * 마우스 진입/이탈 방향에 따른 오버레이 애니메이션 훅
 * @param {Object} options - 훅 옵션
 * @param {number} options.animationDelay - 애니메이션 시작 지연 시간 (ms)
 * @param {number} options.exitDelay - 종료 애니메이션 지연 시간 (ms)
 * @param {string} options.transition - CSS 트랜지션 속성
 * @param {number} options.opacity - 활성화 시 투명도
 * @returns {Object} 훅 반환값
 */
export const useDirectionalHover = (options = {}) => {
  const {
    background = "#e5e5e5",
    animationDelay = 10,
    exitDelay = 400,
    transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity = 0.9
  } = options;
  
  const [overlayStyle, setOverlayStyle] = useState({});
  const elementRef = useRef(null);
  const timeoutRef = useRef(null);
  
  /**
   * 마우스 위치를 기반으로 진입/이탈 방향 계산
   */
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
    
    if (minDistance === distanceToLeft) return "left";
    if (minDistance === distanceToRight) return "right";
    if (minDistance === distanceToTop) return "top";
    if (minDistance === distanceToBottom) return "bottom";
  }, []);
  
  /**
   * 마우스 엔터 핸들러
   */
  const handleMouseEnter = useCallback((e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const direction = getDirection(e, elementRef.current);
    
    // 초기 위치 설정 (트랜지션 없이)
    const initialTransform = {
      left: "translateX(-100%)",
      right: "translateX(100%)",
      top: "translateY(-100%)",
      bottom: "translateY(100%)"
    };
    
    setOverlayStyle({
      background,
      opacity,
      transform: initialTransform[direction],
      transition: "none"
    });
    
    // 애니메이션 시작
    timeoutRef.current = setTimeout(() => {
      setOverlayStyle(prev => ({
        ...prev,
        transform: "translate(0, 0)",
        transition
      }));
    }, animationDelay);
  }, [getDirection, opacity, transition, animationDelay]);
  
  /**
   * 마우스 리브 핸들러
   */
  const handleMouseLeave = useCallback((e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // 나가는 시점의 방향을 다시 계산
    const direction = getDirection(e, elementRef.current);
    
    const exitTransform = {
      left: "translateX(-100%)",
      right: "translateX(100%)",
      top: "translateY(-100%)",
      bottom: "translateY(100%)"
    };
    
    setOverlayStyle(prev => ({
      ...prev,
      transform: exitTransform[direction]
    }));
    
    // 지정된 시간 후 opacity 0으로 변경
    timeoutRef.current = setTimeout(() => {
      setOverlayStyle({
        opacity: 0,
        transform: exitTransform[direction],
      });
    }, exitDelay);
  }, [getDirection, exitDelay]);
  
  /**
   * 오버레이 스타일 초기화
   */
  const resetOverlay = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOverlayStyle({});
  }, []);
  
  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return {
    // ref와 이벤트 핸들러
    elementRef,
    handleMouseEnter,
    handleMouseLeave,
    
    // 스타일과 유틸리티
    overlayStyle,
    resetOverlay,
    
    // 편의 메서드 - 모든 props를 한번에 반환
    getHoverProps: () => ({
      ref: elementRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    })
  };
};