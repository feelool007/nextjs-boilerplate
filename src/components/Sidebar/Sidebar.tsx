import React from "react";
import Link from "next/link";
import { Drawer, withStyles, List, ListItem, ListItemText, Hidden } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import classNames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css"

import { PSidebar } from "./types";
import { sidebarStyles } from "./styles";
import SidebarMenu from "./SidebarMenu";

class Sidebar extends React.Component<PSidebar> {
  static defaultProps = {
    brand: "",
    mini: false,
    rwdOpen: false
  };

  handleGenerateContent = () => {
    const { mini, brand, pageGroups, classes } = this.props;
    return (
      <PerfectScrollbar>
        <List className={classes.brandContainer}>
          <Link href="/">
            <ListItem button>
              {mini ? (
                <Home className={classes.brandMini} />
              ) : (
                <ListItemText
                  primary={brand}
                  classes={{
                    primary: classes.brand
                  }}
                />
              )}
            </ListItem>
          </Link>
        </List>
        {pageGroups.map((d, index) => {
          return <SidebarMenu mini={mini} key={index} pageGroup={d} />;
        })}
      </PerfectScrollbar>
    );
  };

  render = () => {
    const { mini, rwdOpen, onToggleRwd, classes } = this.props;
    return (
      <React.Fragment>
        <Hidden mdDown>
          <Drawer
            open
            variant="permanent"
            classes={{
              paper: classNames({
                [classes.rootBasic]: true,
                [classes.rootMini]: mini,
                [classes.rootNormal]: !mini
              })
            }}
          >
            {this.handleGenerateContent()}
          </Drawer>
        </Hidden>
        <Hidden lgUp>
          <Drawer
            open={rwdOpen}
            variant="temporary"
            classes={{
              paper: classNames({
                [classes.rootBasic]: true,
                [classes.rootNormal]: true
              })
            }}
            transitionDuration={250}
            onClose={onToggleRwd}
          >
            {this.handleGenerateContent()}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  };
}

export default withStyles(sidebarStyles)(Sidebar);
