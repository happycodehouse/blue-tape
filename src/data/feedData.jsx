import { useEffect } from 'react';
import classNames from "classnames";
import style from "../pages/view.module.scss"

// intellij-scss Images
import intellij_scss_img_01 from "../assets/images/feed/intellij-scss/img-01.png"
import intellij_scss_img_02 from "../assets/images/feed/intellij-scss/img-02.png"



//**category : CAREER, DEV, LIFE
export const feedData = [
  {
    id: "intellij-scss",
    category: "DEV",
    date: "08.09.25",
    title: "IntelliJ IDEA SCSS Setup Guide",
    content:
      <>
        <article>
          <header>
            <h2 className={style.sectionTitle}>When You Need This</h2>
            <p>To optimize website loading speed, here's how to set up automatic compilation from SCSS to minified CSS in IntelliJ IDEA.</p>
          </header>
          
          <section>
            <h4 className={style.itemTitle}>This setup is useful for projects that don't have built-in CSS optimization, such as:</h4>
            <ul className={style.itemList}>
              <li>Pure HTML/CSS/JS projects</li>
              <li>Legacy projects without modern build tools</li>
              <li>Custom build tool configurations</li>
              <li>WordPress theme development</li>
              <li>Static websites</li>
            </ul>
            <p className={style.subText}>If you're using modern frameworks like React, Next.js, or Vue with their default build tools, this manual setup isn't necessary as they handle CSS minification automatically.</p>
          </section>
        </article>
        
        <article>
          <header>
            <h2 className={style.sectionTitle}>1. Prerequisites</h2>
          </header>
          
          <section>
            <h3 className={style.subTitle}>1-1. Install Sass Compiler</h3>
            <pre>
              <code>
                npm install -g sass
              </code>
            </pre>
          </section>
          
          <section>
            <h3 className={style.subTitle}>1-2. Install IntelliJ Plugins</h3>
            <p>Go to <strong>File</strong> > <strong>Settings</strong> > <strong>Plugins</strong> and install the following plugins:</p>
            <ul className={style.itemList}>
              <li><strong className={style.bk}>Sass</strong></li>
              <li><strong className={style.bk}>File Watchers</strong></li>
            </ul>
          </section>
        </article>
        
        <article>
          <header>
            <h2 className={style.sectionTitle}>2. Configure SCSS File Watcher</h2>
            <p>Navigate to <strong>File</strong> > <strong>Settings</strong> > <strong>Tools</strong> > <strong>File Watchers</strong> and create a new watcher.</p>
            <div className={classNames(style.imgBox)} data-uk-lightbox="animation: slide">
              <a href={intellij_scss_img_01}>
                <img src={intellij_scss_img_01} alt="IntelliJ SCSS Setup 1"/>
              </a>
              <a href={intellij_scss_img_02}>
                <img src={intellij_scss_img_02} alt="IntelliJ SCSS Setup 2"/>
              </a>
            </div>
          </header>
          
          <section>
            <h3 className={style.subTitle}>2-1. Regular CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre>
              <code>
$FileName$:$FileNameWithoutExtension$.css --no-source-map
              </code>
            </pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre>
              <code>
$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.css.map
              </code>
            </pre>
          </section>
          
          <section>
            <h3 className={style.subTitle}>2-2. Minified CSS Compilation Settings</h3>
            <p><strong>1) Arguments:</strong></p>
            <pre>
              <code>
$FileName$:$FileNameWithoutExtension$.min.css  --style compressed --no-source-map
              </code>
            </pre>
            <p><strong>2) Output paths to refresh:</strong></p>
            <pre>
              <code>
$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css:$ProjectFileDir$/css/$FileNameWithoutExtension$.min.css.map
              </code>
            </pre>
          </section>
        </article>
        
        <article>
          <header>
            <h2 className={style.sectionTitle}>3. Additional Settings</h2>
          </header>
          
          <section>
            <h4 className={style.itemTitle}>Check Track only root files option</h4>
            <ul className={style.itemList}>
              <li>Check <strong>Track only root files</strong> option to ensure compilation only triggers when root SCSS files are modified, not imported partials.</li>
            </ul>
          </section>
          
          <section>
            <p>Now your SCSS files will automatically compile to minified CSS whenever you save them.</p>
          </section>
        </article>
      </>
  },
  {
    id: "circular-heritage",
    category: "DEV",
    date: "03.09.25",
    title: "From 200 to 80 Lines: Heritage Page Code Optimization",
    content:
      <>
        <article>
          <header>
            <h2 className={style.sectionTitle}>들어가는 글</h2>
          </header>
          <p>
            기존 코드를 검토해보니 중복된 로직과 복잡한 구조로 인해 가독성이 떨어지는 문제가 있었습니다.
            이를 개선하기 위해 페이지 모션 스크립트를 처음부터 다시 정리하여 간결하고 명확한 코드로 재작성했습니다.
          </p>
        </article>
  
        <article>
          <header>
            <h2 className={style.sectionTitle}>무엇이 문제였나?</h2>
            <h3 className={style.subTitle}>기존 코드의 문제점</h3>
            <p>기존 Heritage 페이지는 다음과 같은 문제들을 가지고 있었습니다:</p>
          </header>
    
          <section>
            <h4 className={style.itemTitle}>코드 구조 문제</h4>
            <ul className={style.itemList}>
              <li>200줄이 넘는 복잡한 코드로 가독성 저하</li>
              <li>반복적인 하드코딩으로 인한 패턴 부재</li>
              <li>PC/모바일 로직이 명확히 분리되지 않고 하나의 스크립트에 혼재</li>
              <li>개별 요소마다 중복된 이벤트 핸들러</li>
            </ul>
          </section>
    
          <section>
            <h4 className={style.itemTitle}>유지보수성 문제</h4>
            <ul className={style.itemList}>
              <li>하드코딩된 애니메이션 값으로 수정 시 전체 코드 수정 필요</li>
              <li>분산된 로직으로 인한 디버깅 어려움</li>
              <li>기능별 모듈화 부재로 코드 파악 시간 증가</li>
            </ul>
          </section>
        </article>
        
        <article>
          <header>
            <h2 className={style.sectionTitle}>어떻게 해결했나?</h2>
          </header>
          
          <section>
            <h3 className={style.subTitle}>1. 반복 로직 제거</h3>
            <pre>
              <code>
    {`// 기존: 하드코딩된 개별 조건문들
if (targetIdx === 0) {
  gsap.to(window, { scrollTo: fullOffset });
}
if (targetIdx === 1) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 1) });
}
if (targetIdx === 2) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 2) });
}
// ... 각 아이템마다 반복

// 개선: 공식 기반 계산
function activeTimeline(idx) {
  gsap.to(window, {
      scrollTo: $desc.eq(idx).offset().top,
      ease: "none",
      onComplete: () => scrollToItem(idx)
  });
}`}
              </code>
            </pre>
          </section>
          
          <section>
            <h3 className={style.subTitle}>2. 반응형 로직 분리</h3>
            <pre>
              <code>
{`ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
        // PC 전용 스크롤 트리거
    },
    "(max-width: 1024px)": function() {
        // 모바일 최적화 터치 인터랙션
    }
});
`}
              </code>
            </pre>
          </section>
          
          <section>
            <h3 className={style.subTitle}>3. 애니메이션 시스템 개선</h3>
            <pre>
              <code>
{`
// 기존: 수동 플래그 관리로 애니메이션 중복 실행 방지
let chapterMotionFlag_0 = true,
    chapterMotionFlag_1 = true,
    chapterMotionFlag_2 = true,
    chapterMotionFlag_3 = true;

if (progress >= 0 && progress < 24) {
  if(chapterMotionFlag_0){
    chapterMotion(0);
    chapterMotionFlag_0 = false;
  }
  chapterMotionFlag_1 = true;
} else if (progress >= 24 && progress < 49) {
  if (chapterMotionFlag_1) {
    chapterMotion(1);
    chapterMotionFlag_1 = false;
  }
}

// 개선: ScrollTrigger 내장 상태 관리 활용
ScrollTrigger.matchMedia({
  "(min-width: 1025px)": function() {
    $timelineItem.each(function(idx) {
      pcSecHeritageTl.to({}, {
        onStart: () => activeTimeline(idx),
        onReverseComplete: () => activeTimeline(idx - 1)
      });
    });
  }
});
`}
              </code>
            </pre>
          </section>
        </article>
        
        <article>
          <header>
            <h2 className={style.sectionTitle}>마치는 글</h2>
          </header>
          
          <section>
            <p>
              복잡했던 JSP 코드를 간결한 JavaScript로 바꾸면서 코드량은 60% 줄이고 성능은 향상시킬 수 있었습니다.
              하드코딩된 반복 로직을 `activeTimeline(idx)` 같은 재사용 가능한 함수로 만들어 새로운 타임라인 아이템 추가 시에도
              코드 수정 없이 자동으로 동작하도록 했고, PC/모바일 로직을 명확히 분리했습니다.
              또한 복잡했던 수동 플래그 관리를 ScrollTrigger의 콜백 함수를 활용해 자동화한 것도 큰 개선점이었습니다.
              결과적으로 유지보수하기 쉽고 확장 가능한 코드 구조를 만들 수 있었고,
              복잡한 기존 코드를 분석하고 최적화하는 능력을 기를 수 있었습니다.
            </p>
          </section>
        </article>
      </>
  }
];