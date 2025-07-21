import style from "./resume.module.scss";
import classNames from "classnames";

const Resume = () => {
  return (
    <div className="container">
      <div className={style.section}>
        <div className={classNames(style.grid_4, "border_bottom")}>
          <span>ID /</span>
          <span>POSITION /</span>
          <span>DESCRIPTION /</span>
          <span>CONTACT /</span>
        </div>
        <div className={style.grid_4}>
          <p>
            <strong>장하담 </strong>
            HADAM JANG
          </p>
          <p>Web Frontend Developer</p>
          <p>-</p>
          <p>
            <a href="mailto:hadamjang.dev@gmail.com">hadamjang.dev@gmail.com</a>
          </p>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.grid_1_3}>
          <div className={style.team_area}>
            <a href="">Team</a>
            <div>
              <p>Role</p>
              <p>Duration</p>
            </div>
          </div>
          <div className={style.desc_area}>
            <div className={style.grid_1_2}>
              <dl>
                <dt>Project Title</dt>
                <dd>Duration</dd>
              </dl>
              <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;