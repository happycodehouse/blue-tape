import React from 'react';
import samickthkGif_En from "../assets/images/resume/en/samickthk.gif";
import samickthkGif from "../assets/images/resume/samickthk.gif";

interface CompanyInfo {
  name: string;
  url?: string;
  team?: string;
  period?: string;
}

interface MultiLanguageText {
  kr: string | React.ReactNode;
  en: string | React.ReactNode;
}

interface MultiLanguageUrl {
  kr: string;
  en: string;
}

interface ProjectTitle {
  kr: string | React.ReactNode;
  en: string | React.ReactNode;
  url?: MultiLanguageUrl;
}

interface ProjectDetail {
  text: string | React.ReactNode;
  url?: string | string[];
  gif?: string;
}

interface Project {
  title: ProjectTitle;
  period: string | React.ReactNode;
  details: {
    kr: ProjectDetail[];
    en: ProjectDetail[];
  };
  tags?: string[];
}

interface CompanyProject {
  company: CompanyInfo;
  brief: MultiLanguageText;
  projects: Project[];
}

export const projectsData: CompanyProject[] = [
  {
    company: {
      name: "Freelance Contract"
    },
    brief: {
      kr: "삼성 VXT CMS 프로젝트 프리랜서 개발자로 참여하여 React 기반 UI/UX 테스트서버 웹페이지 개발 및 컴포넌트 라이브러리를 구축했습니다.",
      en: "Participated as freelance developer in Samsung VXT CMS project. Developed React-based UI/UX validation web pages and component libraries."
    },
    projects: [
      {
        title: {
          kr: "Samsung VXT CMS",
          en: "Samsung VXT CMS",
          url: {
            kr: "https://www.samsungvx.com",
            en: "https://www.samsungvx.com"
          }
        },
        period: <>25.06 - 08 <br/> 24.10 - 11 <br/> 24.04 - 06</>,
        details: {
          kr: [
            {
              text: "React 기반 UI/UX 검증용 웹페이지 제작"
            },
            {
              text: "컴포넌트 기반 재사용 가능한 UI 라이브러리 구축"
            },
            {
              text: "디자이너 협업을 통한 반응형 웹 인터페이스 구축"
            }
          ],
          en: [
            {
              text: "Built React-based web pages for UI/UX validation"
            },
            {
              text: "Developed reusable component-based UI library"
            },
            {
              text: "Created responsive web interfaces through designer collaboration"
            }
          ]
        },
        tags: ["#React"]
      }
    ]
  },
  {
    company: {
      name: "The Uber Creative",
      url: "https://theuber.co.kr/",
      team: "UI Development Team",
      period: "2023.09 - Present"
    },
    brief: {
      kr: "디지털 에이전시에서 프론트엔드 개발자로 근무하며, 기업 웹사이트 구축 및 운영 업무를 담당하고 있습니다.",
      en: "Working as a Frontend Developer at a digital agency, responsible for corporate website development and maintenance."
    },
    projects: [
      {
        title: {
          kr: "삼성전기 홈페이지 운영",
          en: <>Samsung Electro-Mechanics Website <br/> Maintenance & Enhancement</>,
          url: {
            kr: "https://www.samsungvx.com/onboarding",
            en: "https://www.samsungsem.com/global/index.do"
          }
        },
        period: "2023.09 - Present",
        details: {
          kr: [
            {
              text: <>SEM <a href="https://product.samsungsem.com/index.do" target="_blank" rel="noopener noreferrer">PS</a>/<a href="https://weblib.samsungsem.com/index.do" target="_blank" rel="noopener noreferrer">CL</a> 기술 리소스
                플랫폼 구축 및 운영</>,
            },
            {
              text: "제품정보 카테고리 개편 및 사용자 경험 개선",
              url: "https://www.samsungsem.com/kr/product/module/camera-module/automotive-camera-modules.do"
            },
            {
              text: "웹 접근성 WCAG 2.1 AA 인증 획득 (WebWatch 심사 통과)"
            },
            {
              text: "뉴스레터 연간 리뉴얼 (멀티 플랫폼 호환성 95% 향상)"
            },
            {
              text: "지속가능경영 카테고리 개편 및 인터랙티브 요소 구현",
              url: "https://www.samsungsem.com/kr/sustainability/sustainability.do"
            },
            {
              text: "푸른코끼리 갤러리 AJAX 기반 동적 로딩 시스템 구축 (페이지 로딩 속도 30% 개선)",
              url: "https://samsungsem.com/kr/bepuco/contest.do"
            }
          ],
          en: [
            {
              text: <>SEM <a href="https://product.samsungsem.com/index.do" target="_blank" rel="noopener noreferrer">PS</a>/<a href="https://weblib.samsungsem.com/index.do" target="_blank" rel="noopener noreferrer">CL</a> Technical Resources
                Platform Development & Operations</>,
            },
            {
              text: "Product Category Restructuring & User Experience Enhancement",
              url: "https://www.samsungsem.com/global/product/module/camera-module/automotive-camera-modules.do"
            },
            {
              text: "Achieved WCAG 2.1 AA web accessibility certification through comprehensive WebWatch audit"
            },
            {
              text: "Annual Newsletter Redesign with Multi-platform Compatibility Improvement"
            },
            {
              text: "Sustainability Category Development with Interactive Data Visualization",
              url: "https://www.samsungsem.com/global/sustainability/sustainability.do"
            },
            {
              text: "Blue Elephant Gallery AJAX-based Dynamic Loading System Implementation (30% loading speed improvement)",
              url: "https://samsungsem.com/kr/bepuco/contest.do"
            }
          ]
        },
        tags: ["#A11y", "#AdaptiveDesign", "#PerformanceOptimization", "#AJAX", "#ResponsiveDesign"]
      },
      {
        title: {
          kr: "삼양그룹 계열사 웹사이트 운영",
          en: "Samyang Group Subsidiaries Website Maintenance"
        },
        period: "2023.09 - Present",
        details: {
          kr: [
            {
              text: <><a href="https://samyangspecialty.com/kr/index" target="_blank" rel="noopener noreferrer">Samyang Specialty</a>/<a href="https://www.samyangep.com/kr/index" target="_blank" rel="noopener noreferrer">삼양사 AM BU</a> 홈페이지 통합 관리</>
            },
            {
              text: "정기적 콘텐츠 업데이트 및 기술적 유지보수"
            }
          ],
          en: [
            {
              text: <><a href="https://samyangspecialty.com/en/index" target="_blank" rel="noopener noreferrer">Samyang Specialty</a> and <a href="https://www.samyangep.com/en/index" target="_blank" rel="noopener noreferrer">Samyang AM BU</a> Website Management</>
            },
            {
              text: "Regular content updates and technical maintenance"
            }
          ]
        }
      },
      {
        title: {
          kr: "DB HiTek 웹사이트 리뉴얼",
          en: "DB HiTek Website Development",
          url: {
            kr: "https://dbhitek.com/kr",
            en: "https://dbhitek.com/en/"
          }
        },
        period: "2025.03 - 2025.06",
        details: {
          kr: [
            {
              text: "공통 디자인 시스템 기반 CSS 컴포넌트 라이브러리 구축"
            },
            {
              text: "디바이스별 차별화된 인터랙션 모션 구현 (모바일/PC 분리)",
              url: "https://dbhitek.com/kr/company/about"
            },
            {
              text: "반응형 웹 디자인 및 크로스 브라우저 호환성 최적화"
            },
            {
              text: "웹 접근성 가이드라인 준수 및 사용자 경험 개선"
            }
          ],
          en: [
            {
              text: "Built CSS component library based on unified design system"
            },
            {
              text: "Implemented device-specific interaction animations (separate mobile/PC experiences)",
              url: "https://dbhitek.com/en/company/about"
            },
            {
              text: "Optimized responsive web design and cross-browser compatibility"
            },
            {
              text: "Enhanced user experience with web accessibility compliance"
            }
          ]
        },
        tags: ["#DesignSystem", "#CSS", "#ResponsiveDesign", "#Animation", "#A11y"]
      },
      {
        title: {
          kr: "DAESANG Wellife 웹사이트 구축",
          en: "DAESANG Wellife Website Development",
          url: {
            kr: "https://daesangwellife.com/kr/index",
            en: "https://daesangwellife.com/en/index"
          }
        },
        period: "2024.12 - 2025.05",
        details: {
          kr: [
            {
              text: ""
              // gif: samickthkGif
            },
            {
              text: ""
            }
          ],
          en: [
            {
              text: ""
            },
            {
              text: ""
            }
          ]
        }
      },
      {
        title: {
          kr: "삼양그룹 전사 CI 변경",
          en: "Samyang Group Corporate Identity Renewal",
          url: {
            kr: "https://www.samyang.com/kr/index",
            en: "https://www.samyang.com/en/index"
          }
        },
        period: "2024.07 - 2024.10",
        details: {
          kr: [
            {
              text: ""
              // gif: samickthkGif
            },
            {
              text: ""
            }
          ],
          en: [
            {
              text: ""
            },
            {
              text: ""
            }
          ]
        }
      },
      {
        title: {
          kr: "하나투어 기업PR 사이트 구축",
          en: "Hanatour Corporate PR Website Development",
          url: {
            kr: "https://www.hanatourcompany.com/kr",
            en: "https://www.hanatourcompany.com/en"
          }
        },
        period: "2024.04 - 2024.07",
        details: {
          kr: [
            {
              text: ""
              // gif: samickthkGif
            },
            {
              text: ""
            }
          ],
          en: [
            {
              text: ""
            },
            {
              text: ""
            }
          ]
        }
      },
      {
        title: {
          kr: "삼익THK 통합 사이트 리뉴얼",
          en: "Samik THK Integrated Website Renewal",
          url: {
            kr: "https://www.samickthk.co.kr/kr/",
            en: "https://www.samickthk.co.kr/en/"
          }
        },
        period: "2023.12 - 2024.05",
        details: {
          kr: [
            {
              text: "GSAP ScrollTrigger를 활용한 타임라인 인터랙션 애니메이션",
              gif: samickthkGif
            },
            {
              text: "실제 업무 내용 2"
            }
          ],
          en: [
            {
              text: "Timeline interaction animation with GSAP ScrollTrigger",
              gif: samickthkGif_En
            },
            {
              text: "Real work content 2"
            }
          ]
        }
      },
      {
        title: {
          kr: "자이엘리베이터 사이트 리뉴얼",
          en: "XI Elevator Website Redesign",
          url: {
            kr: "https://www.xielevator.com/kr/index",
            en: "https://www.xielevator.com/en/index"
          }
        },
        period: <>2025.03 - 2025.04 <br/> 2023.09 - 2023.12</>,
        details: {
          kr: [
            {
              text: ""
              // gif: samickthkGif
            },
            {
              text: ""
            }
          ],
          en: [
            {
              text: ""
            },
            {
              text: ""
            }
          ]
        }
      }
    ]
  },
  {
    company: {
      name: "WeverCNS Co., Ltd.",
      url: "https://wever.kr/",
      team: "Web Development Team",
      period: "2021.12 - 2023.02"
    },
    brief: {
      kr: "정부기관 및 기업 공식 웹사이트 구축 전문 회사에서 퍼블리싱 전담으로 참여하여 대규모 정부 프로젝트와 기업 홈페이지 개발을 담당했습니다.",
      en: "Specialized in frontend development for large-scale government and corporate web projects at a leading digital agency."
    },
    projects: [
      {
        title: {
          kr: "제20대 대한민국 대통령실 웹사이트 개편",
          en: <>20th Presidential Office of Korea <br/> Website Redesign</>
        },
        period: "2022.07 - 2022.12",
        details: {
          kr: [
            {
              text: "대통령실 국/영문 공식 홈페이지 전면 재구축"
            },
            {
              text: "반응형 웹 구현 및 웹접근성 인증 획득"
            }
          ],
          en: [
            {
              text: "Redesigned bilingual presidential websites"
            },
            {
              text: "Delivered responsive design + WCAG compliance"
            }
          ]
        },
        tags: ["#A11y"]
      },
      {
        title: {
          kr: "제19대 대한민국 청와대 특별 페이지 구축",
          en: "19th Blue House Special Portal Development"
        },
        period: "2021.12 - 2022.05",
        details: {
          kr: [
            {
              text: "API 연동을 통한 100여개 국정과제 데이터 시각화"
            },
            {
              text: "반응형 웹 및 웹접근성 인증 구현"
            }
          ],
          en: [
            {
              text: "Built interactive data visualization for 100+ policy initiatives via API"
            },
            {
              text: "Built responsive, WCAG-compliant web solution"
            }
          ]
        },
        tags: ["#A11y"]
      },
      {
        title: {
          kr: "대동/아이티센그룹 웹사이트 구축 및 유지보수",
          en: "Corporate Website Development & Maintenance"
        },
        period: "2021 - 2023",
        details: {
          kr: [
            {
              text: "농업기업 대동 및 아이티센그룹 계열사 5개 홈페이지 구축"
            },
            {
              text: "반응형 웹 구현 및 지속적 유지보수 담당"
            }
          ],
          en: [
            {
              text: <>Developed and maintained websites for <a href="https://daedong-kioti.com/" target="_blank" rel="noopener noreferrer">Daedong</a> and ITcen Group
                subsidiaries (5 corporate sites)</>
            },
            {
              text: "Implemented responsive design architecture and provided ongoing technical support"
            }
          ]
        }
      }
    ]
  }
];