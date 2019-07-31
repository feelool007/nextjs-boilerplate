import React from "react";
import Link from "next/link";
import { Drawer, withStyles, List, ListItem, ListItemText, Hidden, Tooltip } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import classNames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { PSidebar, Page } from "./types";
import { sidebarStyles } from "./styles";
import SidebarMenu from "./SidebarMenu";
import SidebarLink from "./SidebarLink";

class Sidebar extends React.Component<PSidebar> {
  static defaultProps = {
    brand: "",
    mini: false,
    rwdOpen: false
  };

  handleGetNestedPages = (groupName: string): Page[] => {
    const { pages } = this.props;
    return pages.filter(d => d.groupName === groupName);
  };

  handleGenerateContent = () => {
    const { mini, brand, pages, pageGroups, classes } = this.props;
    const nonNestedPages = pages.filter(d => !d.groupName);
    return (
      <PerfectScrollbar>
        {/* brand */}
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
        {/* menus: nonNested & nested */}
        {nonNestedPages.map((page, index) => {
          if (mini) {
            const pageMini: Page = {
              ...page,
              name: ""
            };
            return (
              <Tooltip title={page.name} placement="right-end" classes={{ tooltip: classes.tooltip }}>
                <div>
                  <SidebarLink key={index} page={pageMini} mini={mini} />
                </div>
              </Tooltip>
            );
          } else {
            return <SidebarLink key={index} page={page} mini={mini} />;
          }
        })}
        {pageGroups.map((d, index) => {
          const nestedPages = this.handleGetNestedPages(d.groupName);
          return <SidebarMenu key={index} mini={mini} icon={d.icon} groupName={d.groupName} pages={nestedPages} />;
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
