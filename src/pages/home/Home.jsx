import classNames from "classnames";
import BearAnimation from "../../components/home/BearAnimation.jsx";
import GridItem from "../../components/home/GridItem.jsx";
import style from "./home.module.scss";

import bear_hug from "../../assets/images/main/bear-hug.jpg";
import bear_ice from "../../assets/images/main/bear-ice-cream.jpg";
import bear_thinking from "../../assets/images/main/bear-thinking.jpg";

const Home = () => {
  return (
    <div id="container">
      <div className={style.gridWrapper}>
        <div></div>
        <div></div>
        <BearAnimation/>
        <GridItem
          type="img"
          image={bear_hug}
          title="포옹"
          subtitle="Hug"
          year="2018"
        />
        {/* 2 */}
        <div></div>
        <GridItem
          type="link"
          linkTo="/feed"
          title="/FEED"
        />
        <GridItem
          type="link"
          linkTo="/resume"
          title="/RESUME"
        />
        <GridItem
          type="img"
          image={bear_thinking}
          title="생각하는 곰"
          subtitle="Thinking Bear"
          year="2020"
        />
        {/* 3 */}
        <div></div>
        <GridItem
          type="img"
          image={bear_ice}
          // title="한숨 돌리기"
          subtitle="Sweet Escape"
          year="2018"
        />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;