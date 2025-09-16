import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { feedData } from "../../data/feedData";
import FilterButtonGroup from "../../components/common/FilterButtonGroup";
import style from "./feed.module.scss";

const Feed = () => {
  const FILTER_OPTIONS = ["LAB", "DEV", "LIFE"];
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  
  const handleFilterClick = useCallback((filter) => {
    setSelectedFilter(filter);
  }, []);
  
  const handleClearFilter = useCallback(() => {
    setSelectedFilter("ALL");
  }, []);
  
  const filteredData = useMemo(() => {
    return selectedFilter === "ALL"
      ? feedData
      : feedData.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);
  
  // 버튼 데이터 구성
  const buttonData = useMemo(() => [
    {
      key: "all",
      value: "ALL",
      label: selectedFilter === "ALL" ? "ALL" : "CLEAR FILTER"
    },
    ...FILTER_OPTIONS.map(filter => ({
      key: filter.toLowerCase(),
      value: filter,
      label: filter
    }))
  ], [selectedFilter]);
  
  // 데이터가 없을 때 처리
  if (!feedData?.length) {
    return <div className="container">No feed data available</div>;
  }
  
  const noResults = filteredData.length === 0;
  
  return (
    <div id="container">
      <div className={style.feedWrapper}>
        <div className="grid-box">
          <div className="grid-box-left">
            <FilterButtonGroup
              buttons={buttonData}
              selectedValue={selectedFilter}
              onButtonClick={handleFilterClick}
            />
          </div>
          <div className="grid-box-right">
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
    </div>
  );
};

export default Feed;