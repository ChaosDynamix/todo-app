import { FunctionComponent } from "react";
import classes from "./style.module.css";

const Tip: FunctionComponent = () => {
  return (
    <p className={classes.tip}>Drag and drop to reorder list</p>
  );
}

export default Tip;