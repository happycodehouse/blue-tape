import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {feedData} from "../data/feedData.jsx";
import style from "./view.module.scss";

const View = () => {
  const {id} = useParams();
  const post = feedData.find(item => item.id === parseInt(id));
  
  if (!post) {
    return <div>Post not found.</div>;
  }
  
  return (
    <div className="container">
      <div className={style.view}>
        <div className={style.title}>
          <div>
            /<Link to="/feed/"><span>FEED</span></Link><span>/{post.date}</span>
          </div>
          <h1>{post.title}</h1>
        </div>
        <div className={style.content}>
          {post.content}
        </div>
      </div>
    </div>
  )
}

export default View;