import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";
import classes from "./style.module.css";

interface Props {
  active: boolean;
}

const TodoFilter: FunctionComponent<PropsWithChildren<Props>> = ({active, children, setFilter}) => {
  const activeClassNames = classNames([
    classes.todoFilter,
    {
      [classes.todoFilter_active]: active,
      [classes.todoFilter_inactive]: !active,
    }
  ]);

  return (
    <button className={activeClassNames} onClick={setFilter}>
      {children}
    </button>
  )
}

export default TodoFilter;