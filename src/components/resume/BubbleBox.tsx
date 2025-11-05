import React, { useState, useRef } from "react";
import style from "./bubbleBox.module.scss";

interface BubbleBoxProps {
  urls?: string[];
  text: string;
  video?: string;
}

const BubbleBox: React.FC<BubbleBoxProps> = ({ urls, text, video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // 처음부터 재생
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // 처음으로 리셋
    }
  };

  return (
    <div
      className={`${style.bubble_wrap} ${video ? style.video : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="gradient-animation">{text}</span>
      <div className={`${style.bubbleContent} ${isHovered ? style.on : ""}`}>
        <div className={style.inner}>
          {urls && urls.map((url, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
          ))}
          {video && (
            <video
              ref={videoRef}
              src={video}
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