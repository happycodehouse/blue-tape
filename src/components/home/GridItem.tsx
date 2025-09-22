import React from "react";
import { Link } from "react-router-dom";

import style from "./gridItem.module.scss";
import { useDirectionalHover } from "../../hooks/useDirectionalHover";
import { useResponsive } from "../../hooks/useResponsive";

// GridItem 컴포넌트의 props 타입 정의
interface GridItemProps {
  type: "link" | "image";  // "link" 또는 "image"만 가능
  linkTo?: string;         // 링크 URL (선택사항)
  image?: string;          // 이미지 URL (선택사항)
  title: string;           // 제목 (필수)
  subtitle?: string;       // 부제목 (선택사항)
  year?: string | number;  // 연도 (선택사항, 문자열 또는 숫자)
}

const GridItem: React.FC<GridItemProps> = ({
  type,
  linkTo,
  image,
  title,
  subtitle,
  year
}) => {
  const { isDesktop } = useResponsive();

  const { overlayStyle, getHoverProps } = useDirectionalHover();

  const commonProps = {
    className: style.gridItem,
    ...(isDesktop && getHoverProps())
  };

  // 링크 타입
  if (type === "link") {
    if (!linkTo) return null;

    return (
      <div {...commonProps}>
        <Link to={linkTo}>
          <div className="overlay" style={overlayStyle}/>
          <span>{title}</span>
        </Link>
      </div>
    );
  }

  if (!image) return null;

  // 이미지 타입
  return (
    <div {...commonProps} data-uk-lightbox>
      <a href={image} data-type="image">
        <div className="overlay" style={overlayStyle}/>
        <div className={style.content}>
          <div className={style.desc}>
            <em>{year}</em>
            <div className={style.title}>
              <span>{title}</span>
              <span>{subtitle}</span>
            </div>
          </div>
          <img src={image} alt={`${title} - ${subtitle}`}/>
        </div>
      </a>
    </div>
  );
};

export default GridItem;