//**category : CAREER, DEV, LIFE
import style from "../pages/view.module.scss"

export const feedData = [
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
            <h2 className={style.sectionTitle}>최적화 과정</h2>
            <h3 className={style.subTitle}>기존 코드의 문제점</h3>
            <p>기존 Heritage 페이지는 다음과 같은 문제들을 가지고 있었습니다:</p>
          </header>
    
          <section aria-labelledby="code-structure">
            <h4 id="code-structure" className={style.itemTitle}>코드 구조 문제</h4>
            <ul className={style.itemList}>
              <li>200줄이 넘는 복잡한 코드로 가독성 저하</li>
              <li>반복적인 하드코딩으로 인한 패턴 부재</li>
              <li>PC/모바일 로직이 명확히 분리되지 않고 하나의 스크립트에 혼재</li>
              <li>개별 요소마다 중복된 이벤트 핸들러</li>
            </ul>
          </section>
    
          <section aria-labelledby="maintenance">
            <h4 id="maintenance" className={style.itemTitle}>유지보수성 문제</h4>
            <ul className={style.itemList}>
              <li>하드코딩된 애니메이션 값으로 수정 시 전체 코드 수정 필요</li>
              <li>분산된 로직으로 인한 디버깅 어려움</li>
              <li>기능별 모듈화 부재로 코드 파악 시간 증가</li>
            </ul>
          </section>
        </article>
      </>
  }
];