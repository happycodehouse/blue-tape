import {useState} from "react";
import {Link} from "react-router-dom";
import {feedData} from "../data/feedData.jsx";
import classNames from "classnames";
import style from "./feed.module.scss";

const Feed = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  
  const filterOptions = ["CAREER", "DEV", "LIFE"];
  
  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };
  
  const handleClearFilter = () => {
    setSelectedFilter(null);
  };
  
  const filteredData = selectedFilter
    ? feedData.filter(item => item.category === selectedFilter)
    : feedData;
  
  return (
    <div className={classNames("container", style.container)}>
      <div className={classNames(style.section, style.left)}>
        <div className={style.section_title}>
          <span>/ FILTER</span>
          <button type="button" onClick={handleClearFilter}>CLEAR FILTER</button>
        </div>
        <ul className={style.filter_list}>
          {filterOptions.map((filter) => (
            <li
              key={filter}
              className={classNames({[style.selected]: selectedFilter === filter})}
            >
              <button type="button" onClick={() => handleFilterClick(filter)}>
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classNames(style.section, style.right)}>
        <div className={style.section_title}>
          <span className={style.date}>/ DATE</span>
          <span className={style.title}>/ TITLE</span>
        </div>
        <ul className={style.feed_list}>
          {filteredData.map((item) => (
            <li key={item.id}>
              <Link to={`/feed/view/${item.id}`}>
                <span className={style.date}>{item.date}</span>
                <span className={style.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feed;