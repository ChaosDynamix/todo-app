import classes from "./style.module.css";
import classNames from "classnames";

function Foreground({ children, margin, mobile }) {
  const activeClasses = classNames([
    classes.foreground,
    {
      [classes.foreground_margin]: margin,
      [classes.foreground_mobile]: mobile,
    }
  ]);

  return (
    <div className={activeClasses}>
      { children }
    </div>
  );
}

export default Foreground;