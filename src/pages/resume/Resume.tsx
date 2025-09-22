import { useState, useCallback } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import style from "./resume.module.scss";
import FilterButtonGroup from "../../components/common/FilterButtonGroup";
import ProjectsSection from "../../components/resume/ProjectsSection";
import { languageData, personalInfo } from "../../data/commonData";

const Resume = () => {
  // boolean 타입 명시
  const [isKorean, setIsKorean] = useState<boolean>(false);

  // value 타입을 명시
  const handleLanguageChange = useCallback((value: boolean) => {
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
                  <strong>
                    {isKorean ? personalInfo.name.kr : personalInfo.name.en}
                  </strong>{" "}
                </p>
                <p>{personalInfo.position}</p>
                <p>
                  {isKorean ? personalInfo.motto.kr : personalInfo.motto.en}
                </p>
                <p>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                  <div className={style.iconWrap}>
                    <a
                      href={personalInfo.linkedin}
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={28} />
                    </a>
                    <a
                      href={personalInfo.github}
                      title="Github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={28} />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <ProjectsSection isKorean={isKorean} />
        </div>
      </div>
    </div>
  );
};

export default Resume;