import React from "react";
import { withStyles } from "@material-ui/core";

import { PSidebarWrapper } from "./types";
import { layoutStyles } from "./styles";

class SidebarWrapper extends React.Component<PSidebarWrapper> {
  render = () => {
    const { children, classes } = this.props;
    return <div className={classes.sidebarWrapper}>{children}</div>;
  };
}

export default withStyles(layoutStyles)(SidebarWrapper);
