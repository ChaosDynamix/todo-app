import classes from "./style.module.css";
import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  flex?: boolean;
}

const Container: FunctionComponent<PropsWithChildren<Props>> = ({ children, flex = false }) => {
  const activeClassNames = classNames([
    classes.container,
    {
      [classes.container_flex]: flex,
    }
  ]);

  return (
    <div className={activeClassNames}>
      { children }
    </div>
  );
}

export default Container;