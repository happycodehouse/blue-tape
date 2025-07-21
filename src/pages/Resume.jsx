import style from "./resume.module.scss";
import classNames from "classnames";

const Resume = () => {
  return (
    <div className="container">
      <div className={classNames(style.grid_4, "border_bottom")}>
        <span>ID /</span>
        <span>POSITION /</span>
        <span>DESCRIPTION /</span>
        <span>CONTACT /</span>
      </div>
      <div className={style.grid_4}>
        <p>
          장하담
          <br/>
          1996.04.08
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default Resume;