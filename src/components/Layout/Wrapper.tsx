import React from "react";
import { withStyles } from "@material-ui/core";

import { PWrapper } from "./types";
import { layoutStyles } from "./styles";

class Wrapper extends React.Component<PWrapper> {
  render = () => {
    const { children, classes } = this.props;
    return <div className={classes.wrapper}>{children}</div>;
  };
}

export default withStyles(layoutStyles)(Wrapper);
