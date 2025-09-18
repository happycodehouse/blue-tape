import BubbleBox from "./BubbleBox";
import {projectsData} from "../../data/resumeData";
import style from "../../pages/resume/resume.module.scss";

const ProjectsSection = ({isKorean}) => {
  return (
    <>
      {
        projectsData.map((company, index) => (
          <div key={index} className={style.gridOneThree}>
            <div className={style.teamArea}>
              {company.company.url ?
                <a href={company.company.url} target="_blank" rel="noopener noreferrer">
                  {company.company.name}
                </a>
                :
                <span>{company.company.name}</span>
              }
              
              <ul>
                <li>{company.company.team}</li>
                <li>{company.company.period}</li>
              </ul>
            </div>
            
            <div className={style.descArea}>
              <div>
                <p className={style.brief}>
                  {isKorean ? company.brief.kr : company.brief.en}
                </p>
              </div>
              {company.projects.map((project, projectIndex) => (
                <div key={projectIndex} className={style.gridOneTwo}>
                  <dl>
                    <dt>
                      {project.title.url ? (
                        <a
                          href={isKorean ? project.title.url.kr : project.title.url.en}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isKorean ? project.title.kr : project.title.en}
                        </a>
                      ) : (
                        isKorean ? project.title.kr : project.title.en
                      )}
                    </dt>
                    <dd>{project.period}</dd>
                  </dl>
                  <div>
                    <ul>
                      {(isKorean ? project.details.kr : project.details.en).map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          {/* GIF가 있는 경우 */}
                          {detail.gif ? (
                            <BubbleBox gif={detail.gif} text={detail.text} />
                          ) : detail.url ? (
                            /* URL이 있는 경우 */
                            Array.isArray(detail.url) && detail.url.length > 1 ? (
                              <BubbleBox urls={detail.url} text={detail.text} />
                            ) : (
                              <a
                                href={Array.isArray(detail.url) ? detail.url[0] : detail.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {detail.text}
                              </a>
                            )
                          ) : (
                            /* 일반 텍스트 */
                            detail.text
                          )}
                        </li>
                      ))}
                    </ul>
                    {project.tags && (
                      <div className={style.tagWrap}>
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </>
  );
};

export default ProjectsSection;