// React hooks
import { useEffect, useRef } from 'react';

// Third-party libraries
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

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

const GridItem = ({ type }) => {
  // 커스텀 훅 사용
  useLightboxLenis();
  
  return (
    <div className={style.gridItem} data-uk-lightbox="animation: fade">
      <a href={bear_ice}>
        <div className={style.overlay}></div>
        <div className={style.content}>
          <div className={style.desc}>
            <em>2018</em>
            <div className={style.title}>
              <span>한숨 돌리기</span>
              <span>Take a Breath</span>
            </div>
          </div>
          <img src={bear_ice} alt=""/>
        </div>
      </a>
    </div>
  )
}

export default GridItem;