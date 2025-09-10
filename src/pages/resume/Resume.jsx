import {useState, useCallback} from "react";
import classNames from "classnames";
import {languageData, personalInfo} from "../../data/commonData.jsx";
import style from "./resume.module.scss";
import ProjectsSection from "../../components/resume/ProjectsSection.jsx";

const Resume = () => {
  const [isKorean, setIsKorean] = useState(false);
  
  // 언어 변경 핸들러
  const handleLanguageChange = useCallback((value) => {
    setIsKorean(value);
  }, []);
  
  return (
    <div id="container">
      <div className={style.resumeWrapper}>
        <div className={style.section}>
          <div className={classNames(style.gridFour, "borderBottom")}>
            <span>ID /</span>
            <span>POSITION /</span>
            <span>DESCRIPTION /</span>
            <span>CONTACT /</span>
          </div>
          <div className={style.gridFour}>
            <p>
              <strong>{isKorean ? personalInfo.name.kr : personalInfo.name.en}</strong>
              {" "}
              {isKorean ? personalInfo.name.en : personalInfo.name.kr}
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
        <div className={classNames(style.languageBtnWrap, "borderBottom")}>
          {languageData.map((button) => (
            <button
              key={button.key}
              onClick={() => handleLanguageChange(button.value)}
              className={isKorean === button.value ? style.on : ""}
              aria-pressed={isKorean === button.value}
              aria-label={`Switch to ${button.label}`}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className={style.section}>
          <ProjectsSection isKorean={isKorean}/>
        </div>
      </div>
    </div>
  );
};

export default Resume;