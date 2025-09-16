import style from "./filterButtonGroup.module.scss";

const FilterButtonGroup = ({
  buttons = [],
  selectedValue,
  onButtonClick,
  className = ""
  }) => {
  return (
    <div className={`${style.gridButtonBox} ${className}`}>
      {buttons.map((button) => (
        <button
          key={button.key || button.value || button.label}
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