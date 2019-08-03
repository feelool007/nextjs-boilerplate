import React from "react";
import { withStyles } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

import { PScrollTop } from "./types";
import { layoutStyles } from "./styles";
import { Fab } from "../Button";

const ScrollTop: React.SFC<PScrollTop> = props => {
  const handleScrollTop = () => {
    const target = document.querySelector("#main-panel");
    if (target) {
      target.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  };

  const { classes } = props;
  return (
    <Fab size="small" color="default" className={classes.scrollTop} onClick={handleScrollTop}>
      <KeyboardArrowUp style={{ fontSize: 28 }} />
    </Fab>
  );
};

export default withStyles(layoutStyles)(ScrollTop);
