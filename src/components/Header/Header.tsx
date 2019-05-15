import React from "react";
import { Grid, Typography, Hidden, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { PHeader } from "./types";
import { headerStyles } from "./styles";

class Header extends React.Component<PHeader> {
  static defaultProps = {
    pageName: ""
  };

  render = () => {
    const { pageName, onToggleMini, onToggleRwd, children, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Grid container alignItems="center">
            <Hidden mdDown>
              <Menu className={classes.menuToggler} onClick={onToggleMini} />
            </Hidden>
            <Hidden lgUp>
              <Menu className={classes.menuToggler} onClick={onToggleRwd} />
            </Hidden>
            <Typography variant="body2">{pageName}</Typography>
          </Grid>
        </div>
        {children}
      </div>
    );
  };
}

export default withStyles(headerStyles)(Header);
