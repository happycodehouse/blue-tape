
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import style from './view.module.scss';
import { feedData } from '../../data/feedData';

import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

const View = () => {
  const {id} = useParams();
  const post = feedData.find(item => item.id === id);
  
  if (!post) {
    return <div>Post not found.</div>;
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <div className="container">
        <div className={style.viewWrapper}>
          <div className={style.titleArea}>
            <div className={style.date}>
              <span>/</span>
              <Link to="/feed">Feed</Link>
              <span>/{post.date}</span>
            </div>
            <h1>{post.title}</h1>
          </div>
          <div className={style.contentArea}>
            {post.content}
          </div>
        </div>
      </div>
    </>
  )
}

export default View;