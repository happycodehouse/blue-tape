import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {feedData} from "../data/feedData.jsx";
import style from "./view.module.scss";

// UIkit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';
import { useEffect } from 'react';

UIkit.use(Icons);

const View = () => {
  const {id} = useParams();
  const post = feedData.find(item => item.id === id);
  
  // UIkit 초기화
  useEffect(() => {
    UIkit.update();
  }, [post]); // post가 변경될 때마다 UIkit 업데이트
  
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