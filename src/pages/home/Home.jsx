import classNames from "classnames";
import BearAnimation from "../../components/home/BearAnimation.jsx";
import GridItem from "../../components/home/GridItem.jsx";
import style from "./home.module.scss";

const Home = () => {
  return (
    <div id="container">
      <div className={style.gridWrapper}>
        {/* 1 */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {/* 2 */}
        <div></div>
        <div><BearAnimation /></div>
        <div></div>
        <div></div>
        {/* 3 */}
        <div></div>
        <div></div>
        <div><GridItem type="img" /></div>
        {/*<div><img src={bear_ice} alt=""/></div>*/}
        <div></div>
        {/* 4 */}
        {/*<div><img src={bear_hug} alt=""/></div>*/}
        <div></div>
        <div></div>
        <div></div>
        {/* 5 */}
        <div></div>
        <div></div>
        <div></div>
        {/*<div><img src={bear_thinking} alt=""/></div>*/}
      </div>
    </div>
  );
};

export default Home;