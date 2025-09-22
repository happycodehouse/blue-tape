import React, { useState } from "react";

import style from "./bubbleBox.module.scss";

// BubbleBox props 타입 정의
interface BubbleBoxProps {
  urls?: string[];        // URL 배열 (선택사항)
  text: string;          // 텍스트 (필수)
  gif?: string;          // GIF URL (선택사항)
}

const BubbleBox: React.FC<BubbleBoxProps> = ({ urls, text, gif }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${style.bubble_wrap} ${gif ? style.gif : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="gradient-animation">{text}</span>
      <div className={`${style.bubbleContent} ${isHovered ? style.on : ""}`}>
        <div className={style.inner}>
          {urls && urls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          ))}
          {gif && (
            <img src={gif} alt="Project demonstration"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default BubbleBox;