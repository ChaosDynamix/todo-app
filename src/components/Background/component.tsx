import mobileLightBackground from "@images/bg-mobile-light.jpg";
import mobileDarkBackground from "@images/bg-mobile-dark.jpg";
import desktopLightBackground from "@images/bg-desktop-light.jpg";
import desktopDarkBackground from "@images/bg-desktop-dark.jpg";
import classes from "./style.module.css";
import { FunctionComponent } from "react";

interface Props {
  theme: string;
}

const Background: FunctionComponent<Props> = ({ theme }) => {
  return (
    <picture className={classes.background}>
      <source
        srcSet={theme === "dark" ? desktopDarkBackground : desktopLightBackground}
        media="(min-width: 992px)"
      />
      <img
        className={classes.background__image}
        src={theme === "dark" ? mobileDarkBackground : mobileLightBackground}
        alt="Background image"
      />
    </picture>
  );
}

export default Background;