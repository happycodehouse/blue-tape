import { Link } from "react-router-dom";
import { useLightboxLenis } from "../../hooks/useLightboxLenis";
import { useResponsive } from "../../hooks/useResponsive";
import { useDirectionalHover } from "../../hooks/useDirectionalHover";
import style from "./gridItem.module.scss";

const GridItem = ({ type, linkTo, image, title, subtitle, year }) => {
  useLightboxLenis();
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
          <div className="overlay" style={overlayStyle} />
          <span>{title}</span>
        </Link>
      </div>
    );
  }
  
  // 이미지 타입
  return (
    <div {...commonProps} data-uk-lightbox>
      <a href={image} data-type="image">
        <div className="overlay" style={overlayStyle} />
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