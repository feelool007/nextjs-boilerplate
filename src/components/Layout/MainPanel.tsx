import React from "react";
import { withStyles } from "@material-ui/core";

import { PMainPanel } from "./types";
import { layoutStyles } from "./styles";

class MainPanel extends React.Component<PMainPanel> {
  render = () => {
    const { children, classes } = this.props;
    return <div className={classes.mainPanel}>{children}</div>;
  };
}

export default withStyles(layoutStyles)(MainPanel);
