import {useState} from "react";
import classNames from "classnames";

import style from "./resume.module.scss";

const Resume = () => {
  const [isKorean, setIsKorean] = useState(false);
  
  const setKorean = () => {
    setIsKorean(true);
  };
  
  const setEnglish = () => {
    setIsKorean(false);
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
      <div className={classNames(style.language_btn_wrap, "border_bottom")}>
        <button
          onClick={setKorean}
          className={isKorean ? style.on : ""}
        >
          KR
        </button>
        <button
          onClick={setEnglish}
          className={!isKorean ? style.on : ""}
        >
          ENG
        </button>
      </div>
      <div className={style.section}>
        <div className={style.grid_1_3}>
          <div className={style.team_area}>
            <a href="https://theuber.co.kr/" target="_blank">The Uber Creative.</a>
            <ul>
              <li>UI Development Team</li>
              <li>2023.09 - Present</li>
            </ul>
          </div>
          <div className={style.desc_area}>
            <div>
              <p className={style.brief}>
                {isKorean ?
                  ""
                  :
                  <></>
                }
              </p>
            </div>
          </div>
        </div>
        <div className={style.grid_1_3}>
          <div className={style.team_area}>
            <a href="https://wever.kr/" target="_blank">WeverCNS Co., Ltd.</a>
            <ul>
              <li>Web Development Team</li>
              <li>2021.12 - 2023.02</li>
            </ul>
          </div>
          <div className={style.desc_area}>
            <div>
              <p className={style.brief}>
                {isKorean ?
                  "정부기관 및 기업 공식 웹사이트 구축 전문 회사에서 퍼블리싱 전담으로 참여하여 대규모 정부 프로젝트와 기업 홈페이지 개발을 담당했습니다."
                  :
                  <>
                    Specialized in frontend development for large-scale government and corporate web projects at a leading digital agency. <br />
                    Contributed to UI/UX implementation for high-profile public sector initiatives and enterprise websites.
                  </>
                }
              </p>
            </div>
            <div className={style.grid_1_2}>
              <dl>
                <dt>
                  {isKorean ?
                    "제20대 대한민국 대통령실 웹사이트 개편"
                    :
                    <>20th Presidential Office of Korea <br/> Website Redesign</>
                  }
                </dt>
                <dd> 2022.07 - 2022.12</dd>
              </dl>
              <div>
                <ul>
                  {isKorean ?
                    <ul>
                      <li>대통령실 국/영문 공식 홈페이지 전면 재구축</li>
                      <li>반응형 웹 구현 및 웹접근성 인증 획득</li>
                    </ul>
                    :
                    <ul>
                      <li>Complete redesign and development of official Korean and English presidential websites</li>
                      <li>Implemented responsive design and achieved web accessibility certification (WCAG compliance)</li>
                    </ul>
                  }
                </ul>
                <div className={style.tag_wrap}>
                  <span>#Html</span>
                  <span>#Css</span>
                  <span>#Javascript</span>
                  <span>#A11y</span>
                </div>
              </div>
            </div>
            <div className={style.grid_1_2}>
              <dl>
                <dt>
                  {isKorean ?
                    "제19대 대한민국 청와대 특별 페이지 구축"
                    :
                    <>19th Blue House Special Portal Development</>
                  }
                </dt>
                <dd>2021.12 - 2022.05</dd>
              </dl>
              <div>
                {isKorean ?
                  <ul>
                    <li>API 연동을 통한 100여개 국정과제 데이터 시각화</li>
                    <li>반응형 웹 및 웹접근성 인증 구현</li>
                  </ul>
                  :
                  <ul>
                    <li>Built interactive data visualization for 100+ government policy initiatives using API integration</li>
                    <li>Delivered responsive web solution with full accessibility compliance</li>
                  </ul>
                }
                <div className={style.tag_wrap}>
                  <span>#Html</span>
                  <span>#Css</span>
                  <span>#Javascript</span>
                  <span>#A11y</span>
                </div>
              </div>
            </div>
            <div className={style.grid_1_2}>
              <dl>
                <dt>
                  {isKorean ?
                    "대동/아이티센그룹 웹사이트 구축 및 유지보수"
                    :
                    <>Corporate Website Development & Maintenance</>
                  }
                </dt>
                <dd>2021 - 2023</dd>
              </dl>
              <div>
                {isKorean ?
                  <ul>
                    <li>농업기업 대동 및 아이티센그룹 계열사 5개 홈페이지 구축</li>
                    <li>반응형 웹 구현 및 지속적 유지보수 담당</li>
                  </ul>
                  :
                  <ul>
                    <li>Developed and maintained websites for Daedong (leading agricultural machinery company) and ITcen Group subsidiaries (5 corporate sites)</li>
                    <li>Implemented responsive design architecture and provided ongoing technical support</li>
                  </ul>
                }
                <div className={style.tag_wrap}>
                  <span>#Html</span>
                  <span>#Css</span>
                  <span>#Javascript</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Resume;