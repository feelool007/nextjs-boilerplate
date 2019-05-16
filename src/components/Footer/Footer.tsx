import React from "react";
import { withStyles } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";

import { PFooter } from "./types";
import { footerStyles } from "./styles";

class Footer extends React.Component<PFooter> {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Copyright className={classes.copyrightIcon} />
        <p className={classes.copyrightContent}>2019 All rights reserved.</p>
      </div>
    );
  }
}

export default withStyles(footerStyles)(Footer);
