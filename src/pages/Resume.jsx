import {useState} from "react";
import classNames from "classnames";
import {languageData, personalInfo} from "../data/commonData.jsx";
import style from "./resume.module.scss";
import ProjectsSection from "../components/projects/ProjectsSection";

const Resume = () => {
  const [isKorean, setIsKorean] = useState(false);
  
  // 언어 변경 핸들러
  const handleLanguageChange = (value) => {
    setIsKorean(value);
  };
  
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
            <strong>{isKorean ? personalInfo.name.ko : personalInfo.name.en}</strong>
            {" "}
            {isKorean ? personalInfo.name.en : personalInfo.name.ko}
          </p>
          <p>{personalInfo.position}</p>
          <p>{personalInfo.description}</p>
          <p>
            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
          </p>
        </div>
      </div>
      
      <div className={classNames(style.language_btn_wrap, "border_bottom")}>
        {languageData.map((button) => (
          <button
            key={button.key}
            onClick={() => handleLanguageChange(button.value)}
            className={isKorean === button.value ? style.on : ""}
          >
            {button.label}
          </button>
        ))}
      </div>
      
      <div className={style.section}>
        {/* 🔥 여기가 핵심! isKorean prop을 전달해야 함 */}
        <ProjectsSection isKorean={isKorean} />
      </div>
    </div>
  )
}

export default Resume;