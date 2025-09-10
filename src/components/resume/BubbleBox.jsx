import { useState } from 'react';
import style from "./bubbleBox.module.scss"

const BubbleBox = ({ urls, text, className, gif }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`${style.bubble_wrap} ${gif ? style.gif : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="gradientAnimation">{text}</span>
      <div className={`${style.bubbleContent} ${isHovered ? style.on : ''}`}>
        <div className={style.inner}>
          {/* URLs가 있을 때만 렌더링 */}
          {urls && urls.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          ))}
          
          {/* GIF가 있을 때만 렌더링 */}
          {gif && (
            <img src={gif} alt="Project demonstration" />
          )}
        </div>
      </div>
    </div>
  )
}

export default BubbleBox;