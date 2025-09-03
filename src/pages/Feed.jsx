import classNames from "classnames";
import style from "./feed.module.scss";

const Feed = () => {
  return (
    <div className={classNames("container", style.container)}>
      <div className={classNames(style.section, style.left)}>
        <div className={style.section_title}>
          <span>/ FILTER</span>
          <button type="button">CLEAR FILTER</button>
        </div>
      </div>
      <div className={classNames(style.section, style.right)}>
        <div className={style.section_title}>
          <span>/ DATE</span>
          <span>/ TITLE</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;