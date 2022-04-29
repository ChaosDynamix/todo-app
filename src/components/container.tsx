import classes from "@assets/styles/components/container.module.css";
import classNames from "classnames";

function Container({ children, flex }) {
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