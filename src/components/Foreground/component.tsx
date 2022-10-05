import classes from "./style.module.css";
import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  margin?: boolean;
  mobile?: boolean;
}

const Foreground: FunctionComponent<PropsWithChildren<Props>> = ({ children, margin = false, mobile = false }) => {
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