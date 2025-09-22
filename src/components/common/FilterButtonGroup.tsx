import React from 'react';
import style from "./filterButtonGroup.module.scss";

interface ButtonType {
  key?: string;
  value: boolean;
  label: string;
}

interface FilterButtonGroupProps {
  buttons: ButtonType[];
  selectedValue: boolean;
  onButtonClick: (value: boolean) => void;
  className?: string;
}

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  buttons = [],
  selectedValue,
  onButtonClick,
  className = ""
  }) => {
    return (
        <div className={`${style.gridButtonBox} ${className}`}>
            {buttons.map((button) => (
              <button
                key={button.key || button.label}
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