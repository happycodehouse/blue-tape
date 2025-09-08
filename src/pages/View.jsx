import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {feedData} from "../data/feedData.jsx";
import style from "./view.module.scss";

// UIkit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import { useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';

UIkit.use(Icons);

// 전역 상태로 중복 실행 방지
let lightboxState = false;
let debounceTimer = null;

const View = () => {
  const {id} = useParams();
  const post = feedData.find(item => item.id === id);
  const lenis = useLenis();
  
  useEffect(() => {
    UIkit.update();
    
    const handleBeforeShow = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        if (!lightboxState) {
          lightboxState = true;
          lenis?.stop();
          console.log('Lightbox opened - Lenis stopped');
        }
      }, 100);
    };
    
    const handleHide = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        if (lightboxState) {
          lightboxState = false;
          lenis?.start();
          console.log('Lightbox closed - Lenis started');
        }
      }, 100);
    };
    
    UIkit.util.on(document, 'beforeshow', '.uk-lightbox', handleBeforeShow);
    UIkit.util.on(document, 'hide', '.uk-lightbox', handleHide);
    
    return () => {
      UIkit.util.off(document, 'beforeshow', '.uk-lightbox', handleBeforeShow);
      UIkit.util.off(document, 'hide', '.uk-lightbox', handleHide);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [post, lenis]);
  
  if (!post) {
    return <div>Post not found.</div>;
  }
  
  return (
    <div className="container">
      <div className={style.viewWrapper}>
        <div className={style.titleArea}>
          <div className={style.date}>
            <span>/</span>
            <Link to="/feed">FEED</Link>
            <span>/{post.date}</span>
          </div>
          <div>
            <button type="button"></button>
          </div>
          <h1>{post.title}</h1>
        </div>
        <div className={style.contentArea}>
          {post.content}
        </div>
      </div>
    </div>
  )
}

export default View;