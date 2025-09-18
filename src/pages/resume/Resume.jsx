import { useState, useCallback } from "react";

import style from "./resume.module.scss";
import FilterButtonGroup from "../../components/common/FilterButtonGroup";
import ProjectsSection from "../../components/resume/ProjectsSection";
import { languageData, personalInfo } from "../../data/commonData";

const Resume = () => {
  const [isKorean, setIsKorean] = useState(false);
  
  // 언어 변경 핸들러
  const handleLanguageChange = useCallback((value) => {
    setIsKorean(value);
  }, []);
  
  return (
    <div id="container">
      <div className={style.resumeWrapper}>
        <div className="grid-box">
          <div className="grid-box-left">
            <FilterButtonGroup
              buttons={languageData}
              selectedValue={isKorean}
              onButtonClick={handleLanguageChange}
            />
          </div>
          <div className="grid-box-right border-bottom">
            <div className={style.idArea}>
              <div className={style.gridFour}>
                <span>ID /</span>
                <span>POSITION /</span>
                <span>MOTTO /</span>
                <span>CONTACT /</span>
              </div>
              <div className={style.gridFour}>
                <p>
                  <strong>{isKorean ? personalInfo.name.kr : personalInfo.name.en}</strong>
                  {" "}
                  {isKorean ? personalInfo.name.en : personalInfo.name.kr}
                </p>
                <p>{personalInfo.position}</p>
                <p>{isKorean ? personalInfo.motto.kr : personalInfo.motto.en}</p>
                <p>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <ProjectsSection isKorean={isKorean}/>
        </div>
      </div>
    </div>
  );
};

export default Resume;