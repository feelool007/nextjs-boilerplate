import React from "react";
import { Grid, Typography, Hidden, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withRouter } from "next/router";

import { PHeader } from "./types";
import { headerStyles } from "./styles";
import { Page } from "../Sidebar/types";
import { flat } from "../../utils/utility";
import { pageGroups } from "../../_helpers/fakeData";

class Header extends React.Component<PHeader> {
  getPageName = (): string => {
    const { router } = this.props;
    const pages: Page[] = flat(pageGroups.map(d => d.pages));
    const curPage: Page | undefined = pages.find(d => d.to === router.pathname);
    return curPage ? curPage.name : "";
  };

  render = () => {
    const { onToggleMini, onToggleRwd, children, classes } = this.props;
    const pageName = this.getPageName();
    return (
      <div className={classes.root}>
        <div className={classes.flex}>
          <Grid container alignItems="flex-end">
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

// There is a bug in withRouter type checking. Keep it quiet until fixed.
// @ts-ignore
export default withStyles(headerStyles)(withRouter(Header));
