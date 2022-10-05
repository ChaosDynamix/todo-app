import classes from "./style.module.css";

function Switch({id, checked, onChange, onClick, readOnly}) {
  return (
    <div className={classes.switch}>
      <input
        className={classes.switch__input}
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        onClick={onClick}
        readOnly={readOnly}
        type="checkbox"
      />
      <div className={classes.switch__circle}>
        <div className={classes.switch__overlay}></div>
        <svg className={classes.switch__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
        </svg>
      </div>
    </div>
  );
}

export default Switch;