import mobileLightBackground from "@images/bg-mobile-light.jpg";
import mobileDarkBackground from "@images/bg-mobile-dark.jpg";
import desktopLightBackground from "@images/bg-desktop-light.jpg";
import desktopDarkBackground from "@images/bg-desktop-dark.jpg";
import classes from "./style.module.css";
import { FunctionComponent } from "react";

interface Props {
  isDarkMode: boolean;
}

const Background: FunctionComponent<Props> = ({ isDarkMode }) => {
  return (
    <picture className={classes.background}>
      <source
        srcSet={isDarkMode ? desktopDarkBackground : desktopLightBackground}
        media="(min-width: 992px)"
      />
      <img
        className={classes.background__image}
        src={isDarkMode ? mobileDarkBackground : mobileLightBackground}
        alt="Background image"
      />
    </picture>
  );
}

export default Background;