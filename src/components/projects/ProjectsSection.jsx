import {projectsData} from "../../data/resumeData.jsx";
import style from "../../pages/resume.module.scss";

const ProjectsSection = ({isKorean}) => {
  return (
    <>
      {
        projectsData.map((project, index) => (
          <div key={index} className={style.grid_1_3}>
            <div className={style.team_area}>
              <a href={project.company.url} target="_blank" rel="noopener noreferrer">
                {project.company.name}
              </a>
              <ul>
                <li>{project.company.team}</li>
                <li>{project.company.period}</li>
              </ul>
            </div>
        
            <div className={style.desc_area}>
              <div>
                <p className={style.brief}>
                  {isKorean ? project.brief.ko : project.brief.en}
                </p>
              </div>
              {project.projects.map((project, projectIndex) => (
                <div key={projectIndex} className={style.grid_1_2}>
                  <dl>
                    <dt>
                      {project.title.url ? (
                        <a
                          href={isKorean ? project.title.url.ko : project.title.url.en}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isKorean ? project.title.ko : project.title.en}
                        </a>
                      ) : (
                        isKorean ? project.title.ko : project.title.en
                      )}
                    </dt>
                    <dd>{project.period}</dd>
                  </dl>
                  <div>
                    <ul>
                      {(isKorean ? project.details.ko : project.details.en).map((detail, detailIndex) => (
                        <li key={detailIndex}>
                          {detail.url ? (
                            <a
                              href={detail.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {detail.text}
                            </a>
                          ) : (
                            detail.text
                          )}
                        </li>
                      ))}
                    </ul>
                    {project.tags && (
                      <div className={style.tag_wrap}>
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