import React from "react";
import { withStyles, LinearProgress } from "@material-ui/core";

import { PPageProgress } from "./types";
import { layoutStyles } from "./styles";

class PageProgress extends React.Component<PPageProgress> {
  render = () => {
    const { classes } = this.props;
    return <LinearProgress variant="indeterminate" className={classes.progress} />
  };
}

export default withStyles(layoutStyles)(PageProgress);
