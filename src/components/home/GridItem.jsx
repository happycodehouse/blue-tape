// React hooks
import { useEffect, useRef } from 'react';

// Third-party libraries
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { Link } from "react-router-dom";

// Local imports - Assets
import bear_hug from '../../assets/images/main/bear-hug.jpg';
import bear_ice from '../../assets/images/main/bear-ice-cream.jpg';
import bear_thinking from '../../assets/images/main/bear-thinking.jpg';

// Local imports - Hooks
import { useLightboxLenis } from '../../hook/useLightboxLenis';

// Local imports - Styles
import style from './gridItem.module.scss';

// Third-party styles
import 'uikit/dist/css/uikit.min.css';

const GridItem = ({ type, linkTo, image, title, subtitle, year }) => {
  useLightboxLenis();
  
  if (type === "link") {
    if (!linkTo) return null;
    
    return (
        <div className={style.gridItem}>
          <Link to={linkTo}>
            <div className={style.overlay}></div>
            <span>{title}</span>
          </Link>
        </div>
    );
  }
  
  return (
    <div className={style.gridItem} data-uk-lightbox="animation: fade">
      <a href={image}>
        <div className={style.overlay}></div>
        <div className={style.content}>
          <div className={style.desc}>
            <em>{year}</em>
            <div className={style.title}>
              <span>{title}</span>
              <span>{subtitle}</span>
            </div>
          </div>
          <img src={image} alt=""/>
        </div>
      </a>
    </div>
  );
};

export default GridItem;