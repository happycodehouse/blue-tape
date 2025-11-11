import React from "react";
import classNames from "classnames";

import intellij_scss_img_01 from "../assets/images/feed/intellij-scss/img-01.png";
import intellij_scss_img_02 from "../assets/images/feed/intellij-scss/img-02.png";
import style from "../pages/feed/view.module.scss";

export interface FeedItem {
  id: string;
  category: "LAB" | "DEV" | "LIFE";
  date: string;
  title: string;
  externalUrl?: string;
  content?: React.ReactNode;
}

//**category : LAB, DEV, LIFE
export const feedData: FeedItem[] = [
  {
    id: "draggable-product-grid",
    category: "LAB",
    date: "10.11.25",
    title: "Draggable Product Grid | Live Demo",
    externalUrl: "https://draggable-product-grid.netlify.app"
  },
  {
    id: "soul",
    category: "LIFE",
    date: "19.09.25",
    title: "I heard this story about a fish.",
    content:
      <>
        <article>
          <section>
            <p>
              I heard this story about a fish.
              <br/>
              He swims up to this older fish and says,
              <br/>
              "I'm trying to find this thing they call the ocean."
              <br/>
              "The ocean?" says the older fish, "that's what you're in right now."
              <br/>
              "This?" says the younger fish, "This is water. What I want is the ocean."
            </p>
            <p>Soul (2020), Disney Pixar</p>
          </section>
        </article>
      </>
  },
  {
    id: "secret-santa",
    category: "LIFE",
    date: "18.09.25",
    title: "Flipping Secret Santa on Its Head",
    content:
      <>
        <article>
          <header>
            <h2>Flipping Secret Santa on Its Head</h2>
          </header>

          <section>
            <h3>The Problem from 2022</h3>
            <p>
              I was put in charge of Secret Santa for our December 2023 year-end party.
              I heard the <b>2022 event</b> didn't go well—the main issue was gift satisfaction.
              Since it's hard to really know your coworkers' preferences, people often received
              unwanted items that ended up unused and forgotten.
            </p>
          </section>

          <section>
            <h3>A New Approach for 2023</h3>
            <p>
              So I completely flipped the format.
              <br/><br/>
              <b>Old way:</b> Know who you're giving to → Guess their preferences → Prepare gift
              <br/>
              <b>New way:</b> Share what you want to receive → Guess who you're preparing for
              <br/><br/>
              This way, everyone gets something they actually want, while still keeping
              the fun of guessing who their Secret Santa is.
            </p>
          </section>
        </article>
      </>
  },
  {
    id: "sticky-vertical-slide",
    category: "LAB",
    date: "17.09.25",
    title: "Responsive Sticky Vertical Component | Live Demo",
    externalUrl: "https://sticky-vertical-slide.netlify.app/"
  },
  {
    id: "intellij-scss",
    category: "DEV",
    date: "08.09.25",
    title: "IntelliJ IDEA SCSS Setup Guide",
    content:
      <>
        <article>
          <header>
            <h2>When You Need This</h2>
            <p>To optimize website loading speed, here's how to set up automatic compilation from SCSS to minified CSS in IntelliJ IDEA.</p>
          </header>
        </article>

        <article>
          <header>
            <h2>1. Prerequisites</h2>
          </header>

          <section>
            <h3>1-1. Install Sass Compiler</h3>
            <pre>
              <code>
                npm install -g sass
              </code>
            </pre>
          </section>

          <section>
            <h3>1-2. Install IntelliJ Plugins</h3>
            <p>Go to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Plugins</strong> and install the
              following plugins:</p>
            <ul className={style.itemList}>
              <li><strong className={style.bk}>Sass</strong></li>
              <li><strong className={style.bk}>File Watchers</strong></li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <h2>2. Configure SCSS File Watcher</h2>
            <p>Navigate to <strong>File</strong> &gt; <strong>Settings</strong> &gt; <strong>Tools</strong> &gt;
              <strong>File Watchers</strong> and create a new watcher.</p>
            <div className={classNames(style.imgBox)} data-uk-lightbox="animation: fade">
              <a href={intellij_scss_img_01}>
                <img src={intellij_scss_img_01} alt="IntelliJ SCSS Setup 1"/>
              </a>
              <a href={intellij_scss_img_02}>
                <img src={intellij_scss_img_02} alt="IntelliJ SCSS Setup 2"/>
              </a>
            </div>
          </header>

          <section>
            <h3>2-1. Regular CSS Compilation Settings</h3>
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
            <h3>2-2. Minified CSS Compilation Settings</h3>
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
          <section>
            <p>Now your SCSS files will automatically compile to minified CSS whenever you save them.</p>
          </section>
        </article>
      </>
  },
  {
    id: "circular-heritage",
    category: "LAB",
    date: "03.09.25",
    title: "From 200 to 80 Lines: Heritage Page Code Optimization",
    content:
      <>
        <article>
          <header>
            <h2>Overview</h2>
          </header>
          <section>
            <p>
              Upon reviewing the existing code, I identified issues with readability due to duplicated logic and complex
              structure.
              To address this, I rewrote the page motion script from scratch, creating cleaner and more maintainable
              code.
            </p>
          </section>
        </article>

        <article>
          <header>
            <h2>What Were the Issues?</h2>
            <h3>Problems with the Original Code</h3>
            <p>The existing Heritage page had several critical issues:</p>
          </header>

          <section>
            <h3>Code Structure Issues</h3>
            <ul className={style.itemList}>
              <li>Over 200 lines of complex code resulting in poor readability</li>
              <li>Lack of patterns due to repetitive hardcoding</li>
              <li>PC/mobile logic mixed together in a single script without clear separation</li>
              <li>Duplicated event handlers for individual elements</li>
            </ul>
          </section>

          <section>
            <h3>Maintainability Issues</h3>
            <ul className={style.itemList}>
              <li>Hardcoded animation values requiring modifications throughout the entire codebase</li>
              <li>Scattered logic making debugging difficult</li>
              <li>Lack of modular organization increasing code comprehension time</li>
            </ul>
          </section>
        </article>

        <article>
          <header>
            <h2>How I Solved It</h2>
          </header>

          <section>
            <h3>Eliminated Repetitive Logic</h3>
            <strong>Before</strong>
            <pre>
              <code>
{`if (targetIdx === 0) {
  gsap.to(window, { scrollTo: fullOffset });
}
  if (targetIdx === 1) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 1) });
}
  if (targetIdx === 2) {
  gsap.to(window, { scrollTo: fullOffset + (fullHeight * 2) });
}
`}
              </code>
            </pre>

            <strong>After</strong>

            <pre>
              <code>
{`function activeTimeline(idx) {
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
            <h3>Separated Responsive Logic</h3>
            <pre>
              <code>
{`ScrollTrigger.matchMedia({
    "(min-width: 1025px)": function() {
        // PC-specific scroll triggers
    },
    "(max-width: 1024px)": function() {
        // Mobile-optimized touch interactions
    }
});
`}
              </code>
            </pre>
          </section>
        </article>

        <article>
          <header>
            <h2>Results</h2>
          </header>

          <section>
            <a
              href="https://circular-heritage.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Live Demo
            </a>
            <a
              href="https://github.com/happycodehouse/circular-heritage"
              target="_blank"
              rel="noopener noreferrer"
            >
              📂 Github
            </a>
          </section>

          <section>
            <p>
              By converting complex JSP code into clean JavaScript, I reduced the codebase by 60% while improving performance.
              Hardcoded repetitive logic was transformed into reusable functions like `activeTimeline(idx)`, enabling automatic handling
              of new timeline items without code modifications. PC and mobile logic were clearly separated for better maintainability.
            </p>
          </section>
        </article>
      </>
  }
];