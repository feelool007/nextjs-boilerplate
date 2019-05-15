import React from "react";
import Link from "next/link";
import { Drawer, withStyles, List, ListItem, ListItemText } from "@material-ui/core";
import classNames from "classnames";

import { PSidebar } from "./types";
import { sidebarStyles } from "./styles";
import SidebarMenu from "./SidebarMenu";

class Sidebar extends React.Component<PSidebar> {
  static defaultProps = {
    brand: "",
    mini: false
  };

  render = () => {
    const { mini, brand, pageGroups, classes } = this.props;
    return (
      <Drawer
        open
        variant="permanent"
        anchor="left"
        classes={{
          paper: classNames({
            [classes.rootBasic]: true,
            [classes.rootMini]: mini,
            [classes.rootNormal]: !mini
          })
        }}
      >
        {mini ? null : (
          <List>
            <Link href="/">
              <ListItem button className={classes.brandContainer}>
                <ListItemText
                  primary={brand}
                  classes={{
                    primary: classes.brand
                  }}
                />
              </ListItem>
            </Link>
          </List>
        )}
        {pageGroups.map((d, index) => {
          return <SidebarMenu mini={mini} key={index} pageGroup={d} />;
        })}
      </Drawer>
    );
  };
}

export default withStyles(sidebarStyles)(Sidebar);
