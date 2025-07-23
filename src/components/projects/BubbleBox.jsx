import { useState } from 'react';
import style from "./bubbleBox.module.scss"

const BubbleBox = ({ urls, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={style.bubble_wrap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="gradient_animation">{text}</span>
      <div className={`${style.bubble_content} ${isHovered ? style.on : ''}`}>
        <div className={style.inner}>
          {urls.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BubbleBox;