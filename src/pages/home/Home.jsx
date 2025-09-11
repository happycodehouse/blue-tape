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

const Home = () => {useEffect(() => {
    UIkit.use(Icons);
  }, []);
  
  const { isDesktop } = useResponsive();
  
  const baseGridItems = [
    null,
    null,
    { type: "animation" }, // BearAnimation
    {
      type: "img",
      image: bear_hug,
      title: "포옹",
      subtitle: "Hug",
      year: "2018"
    },
    null,
    {
      type: "link",
      linkTo: "/feed",
      title: "/FEED"
    },
    {
      type: "link",
      linkTo: "/resume",
      title: "/RESUME"
    },
    {
      type: "img",
      image: bear_thinking,
      title: "생각하는 곰",
      subtitle: "Thinking Bear",
      year: "2020"
    },
    null,
    {
      type: "img",
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
      const images = filtered.filter(item => item.type === "img");
      
      return [...animations, ...links, ...images];
    }
  };
  
  const gridItems = getGridItems();
  
  return (
    <div id="container">
      <div className={style.gridWrapper}>
        {gridItems.map((item, index) => {
          if (!item) return <div key={index}></div>;
          
          if (item.type === "animation") {
            return <BearAnimation key={index} />;
          }
          
          return <GridItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;