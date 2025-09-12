import { useEffect } from "react";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import { useResponsive } from "../../hooks/useResponsive";
import BearAnimation from "../../components/home/BearAnimation.jsx";
import GridItem from "../../components/home/GridItem.jsx";
import style from "./home.module.scss";

import bear_hug from "../../assets/images/main/bear-hug.jpg";
import bear_ice from "../../assets/images/main/bear-ice-cream.jpg";
import bear_thinking from "../../assets/images/main/bear-thinking.jpg";

const Home = () => {
  const { isDesktop } = useResponsive();
  
  const baseGridItems = [
    null,
    null,
    {
      id: "animation-bear",
      type: "animation"
    }, // BearAnimation
    {
      id: "image-hug",
      type: "image",
      image: bear_hug,
      title: "포옹",
      subtitle: "Hug",
      year: "2018"
    },
    null,
    {
      id: "link-feed",
      type: "link",
      linkTo: "/feed",
      title: "/FEED"
    },
    {
      id: "link-resume",
      type: "link",
      linkTo: "/resume",
      title: "/RESUME"
    },
    {
      id: "image-thinking",
      type: "image",
      image: bear_thinking,
      title: "생각하는 곰",
      subtitle: "Thinking Bear",
      year: "2018"
    },
    null,
    {
      id: "image-ice",
      type: "image",
      image: bear_ice,
      title: "한숨 돌리기",
      subtitle: "Sweet Escape",
      year: "2018"
    },
    null,
    null
  ];
  
  const getGridItems = () => {
    if (isDesktop) {
      return baseGridItems;
    } else {
      // 모바일: null 제거 후 타입별로 정렬
      const filtered = baseGridItems.filter(item => item !== null);
      
      const animations = filtered.filter(item => item.type === "animation");
      const links = filtered.filter(item => item.type === "link");
      const images = filtered.filter(item => item.type === "image");
      
      return [...links, ...animations, ...images];
    }
  };
  
  const gridItems = getGridItems();
  
  useEffect(() => {
    UIkit.use(Icons);
    
    // DOM이 완전히 렌더링된 후 lightbox 재초기화
    setTimeout(() => {
      const lightboxElements = document.querySelectorAll('[data-uk-lightbox]');
      lightboxElements.forEach(el => {
        UIkit.lightbox(el);
      });
    }, 100);
  }, [gridItems]);
  
  return (
    <div id="container">
      <div className={style.gridWrapper}>
        {gridItems.map((item, index) => {
          if (!item) return <div key={`empty-${index}`}></div>;
  
          if (item.type === "animation") {
            return <BearAnimation key={item.id} />;
          }
  
          return <GridItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;