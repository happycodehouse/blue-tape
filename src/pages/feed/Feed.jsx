import {useState, useCallback, useMemo} from "react";
import {Link} from "react-router-dom";
import {feedData} from "../../data/feedData.jsx";
import style from "./feed.module.scss";


const Feed = () => {
  const FILTER_OPTIONS = ["LAB", "DEV", "LIFE"];
  const [selectedFilter, setSelectedFilter] = useState(null);
  
  const handleFilterClick = useCallback((filter) => {
    setSelectedFilter(prev => prev === filter ? null : filter);
  }, []);
  
  const handleClearFilter = useCallback(() => {
    setSelectedFilter(null);
  }, []);
  
  const filteredData = useMemo(() => {
    return selectedFilter
      ? feedData.filter(item => item.category === selectedFilter)
      : feedData;
  }, [selectedFilter]);
  
  // 데이터가 없을 때 처리
  if (!feedData?.length) {
    return <div className="container">No feed data available</div>;
  }
  
  const noResults = filteredData.length === 0;
  
  return (
    <div id="container">
      <div className={style.feedWrapper}>
        <div className={`${style.section} ${style.left}`}>
          <div className={style.sectionTitle}>
            <span>/ FILTER</span>
            <button
              type="button"
              onClick={handleClearFilter}
              disabled={!selectedFilter}
              aria-label="Clear all filters"
            >
              CLEAR FILTER
            </button>
          </div>
          <ul className={style.filterList}>
            {FILTER_OPTIONS.map((filter) => (
              <li
                key={filter}
                className={selectedFilter === filter ? style.selected : ""}
              >
                <button
                  type="button"
                  onClick={() => handleFilterClick(filter)}
                  aria-pressed={selectedFilter === filter}
                  aria-label={`Filter by ${filter}`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${style.section} ${style.right}`}>
          <div className={style.sectionTitle}>
            <span className={style.date}>/ DATE</span>
            <span className={style.title}>/ TITLE</span>
          </div>
          {noResults ? (
            <div className={style.noResults}>
              No posts found for the selected filter.
            </div>
          ) : (
            <ul className={style.feedList}>
              {filteredData.map((item) => (
                <li key={item.id}>
                  <Link to={`/feed/${item.id}`}>
                    <span className={style.date}>{item.date}</span>
                    <span className={style.title}>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;