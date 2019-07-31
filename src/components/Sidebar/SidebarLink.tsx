import React from "react";
import { withStyles, ListItem, Grid } from "@material-ui/core";
import { People } from "@material-ui/icons";
import Link from "next/link";
import { withRouter } from "next/router";
import classNames from "classnames";

import { PSidebarLink } from "./types";
import { sidebarStyles } from "./styles";

class SidebarLink extends React.Component<PSidebarLink> {
  render = () => {
    const { page, router, mini, classes } = this.props;
    const { icon: Icon } = page;
    return (
      <Grid container justify="center">
        <Link href={page.to}>
          <ListItem
            button
            className={classNames({
              [classes.menuItem]: true,
              [classes.menuItemHighlight]: page.to === router.pathname
            })}
          >
            {Icon ? (
              <Icon className={classes.icon} />
            ) : (
              // placeholder, only use in mini mode
              !mini && <People className={classNames(classes.icon, classes.visibleHidden)} />
            )}
            <div className={classes.flex}>
              <p
                className={classNames({
                  [classes.menuItemText]: true,
                  [classes.menuItemTextHighlight]: page.to === router.pathname
                })}
              >
                {page.name}
              </p>
            </div>
          </ListItem>
        </Link>
      </Grid>
    );
  };
}

// @ts-ignore
export default withStyles(sidebarStyles)(withRouter(SidebarLink));
