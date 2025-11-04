import React, { useState } from "react";

import style from "./bubbleBox.module.scss";

// BubbleBox props 타입 정의
interface BubbleBoxProps {
  urls?: string[];        // URL 배열 (선택사항)
  text: string;          // 텍스트 (필수)
  video?: string;        // Video URL (선택사항) - gif에서 video로 변경
}

const BubbleBox: React.FC<BubbleBoxProps> = ({ urls, text, video }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${style.bubble_wrap} ${video ? style.video : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="gradient-animation">{text}</span>
      <div className={`${style.bubbleContent} ${isHovered ? style.on : ""}`}>
        <div className={style.inner}>
          {urls && urls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          ))}
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default BubbleBox;