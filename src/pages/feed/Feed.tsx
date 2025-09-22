import React from "react";
import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

import style from "./feed.module.scss";
import FilterButtonGroup from "../../components/common/FilterButtonGroup";
import { feedData } from "../../data/feedData";

interface FeedItem {
  id: string | number;
  category: string;
  date: string;
  title: string;
}

interface ButtonData {
  key: string;
  value: string;
  label: string;
}

type FilterOption = "LAB" | "DEV" | "LIFE";
type SelectedFilter = "ALL" | FilterOption;

const Feed: React.FC = () => {
  const FILTER_OPTIONS: FilterOption[] = ["LAB", "DEV", "LIFE"];
  const [selectedFilter, setSelectedFilter] = useState<SelectedFilter>("ALL");

  const handleFilterClick = useCallback((filter: SelectedFilter) => {
    setSelectedFilter(filter);
  }, []);

  const filteredData = useMemo<FeedItem[]>(() => {
    return selectedFilter === "ALL"
      ? feedData
      : feedData.filter((item: FeedItem) => item.category === selectedFilter);
  }, [selectedFilter]);

  const buttonData = useMemo<ButtonData[]>(() => [
    {
      key: "all",
      value: "ALL",
      label: selectedFilter === "ALL" ? "ALL" : "CLEAR FILTER"
    },
    ...FILTER_OPTIONS.map((filter: FilterOption) => ({
      key: filter.toLowerCase(),
      value: filter,
      label: filter
    }))
  ], [selectedFilter]);

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
            <div className={style.feedArea}>
              <div className={style.sectionTitle}>
                <span className={style.date}>/ DD.MM.YY</span>
                <span className={style.title}>/ TITLE</span>
              </div>
              {noResults ? (
                <div className={style.noResults}>
                  No posts found for the selected filter.
                </div>
              ) : (
                <ul className={style.feedList}>
                  {filteredData.map((item: FeedItem) => (
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
    </div>
  );
};

export default Feed;