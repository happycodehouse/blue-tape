import React from "react";
import style from "./filterButtonGroup.module.scss";

interface ButtonType<T> {
  key?: string;
  value: T;
  label: string;
}

interface FilterButtonGroupProps<T> {
  buttons: ButtonType<T>[];
  selectedValue: T;
  onButtonClick: (value: T) => void;
  className?: string;
}

const FilterButtonGroup = <T, >({
  buttons = [],
  selectedValue,
  onButtonClick,
  className = ""
}: FilterButtonGroupProps<T>) => {
  return (
    <div className={`${style.gridButtonBox} ${className}`}>
      {buttons.map((button) => (
        <button
          key={button.key || String(button.label)}
          className={`${style.button} ${selectedValue === button.value ? style.selected : ""}`}
          onClick={() => onButtonClick(button.value)}
        >
          <span className={style.buttonText}>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtonGroup;