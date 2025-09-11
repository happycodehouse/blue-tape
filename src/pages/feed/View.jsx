// Third-party libraries
import { useParams, Link } from "react-router-dom";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// Local imports
import { feedData } from "../../data/feedData";
import { useLightboxLenis } from "../../hooks/useLightboxLenis";
import style from "./view.module.scss";

// Styles
import "uikit/dist/css/uikit.min.css";

UIkit.use(Icons);

const View = () => {
  const {id} = useParams();
  const post = feedData.find(item => item.id === id);
  
  // 커스텀 훅 사용
  useLightboxLenis();
  
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