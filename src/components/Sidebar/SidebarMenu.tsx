import React from "react";
import { List, ListItem, ListItemText, Collapse, Paper, Popper, withStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import classNames from "classnames";

import { PSidebarMenu, SSidebarMenu } from "./types";
import { sidebarStyles } from "./styles";

class SidebarMenu extends React.Component<PSidebarMenu, SSidebarMenu> {
  static defaultProps = {
    mini: false
  };

  private __ref: React.RefObject<null>;

  constructor(props: PSidebarMenu) {
    super(props);
    this.state = {
      openCollapse: false,
      openPopover: false
    };
    this.__ref = React.createRef();
  }

  handleToggleCollapse = () => {
    this.setState(prevState => ({
      openCollapse: !prevState.openCollapse
    }));
  };

  handleOpenPopover = () => {
    this.setState({
      openPopover: true
    });
  };

  handleClosePopover = () => {
    this.setState({
      openPopover: false
    });
  };

  handleGenerateMenu = () => {
    const { classes } = this.props;
    const { pages } = this.props.pageGroup;
    return pages.map((d, index) => {
      return (
        <Link key={index} href={d.to}>
          <ListItem
            button
            className={classNames({
              [classes.menuItem]: true,
              [classes.menuItemHighlight]: false
            })}
          >
            <ListItemText
              primary={d.name}
              classes={{
                primary: classNames({
                  [classes.menuItemText]: true,
                  [classes.menuItemTextHighlight]: false
                })
              }}
            />
          </ListItem>
        </Link>
      );
    });
  };

  render = () => {
    const { pageGroup, mini, classes } = this.props;
    const { icon: Icon, groupName } = pageGroup;
    const { openCollapse, openPopover } = this.state;
    return mini ? (
      <List onMouseEnter={this.handleOpenPopover} onMouseLeave={this.handleClosePopover} className={classes.menuRoot}>
        <ListItem
          button
          divider
          buttonRef={this.__ref}
          className={classNames({
            [classes.menu]: true,
            [classes.menuOpen]: openCollapse,
            [classes.menuClose]: !openCollapse
          })}
        >
          <Icon className={classes.icon} />
        </ListItem>
        <Popper open={openPopover} anchorEl={this.__ref.current} placement="right-start">
          <Paper className={classes.popperMenu}>{this.handleGenerateMenu()}</Paper>
        </Popper>
      </List>
    ) : (
      <List className={classes.menuRoot}>
        <ListItem
          button
          divider
          onClick={this.handleToggleCollapse}
          className={classNames({
            [classes.menu]: true,
            [classes.menuOpen]: openCollapse,
            [classes.menuClose]: !openCollapse
          })}
        >
          <Icon className={classes.icon} />
          <p className={classes.menuText}>{groupName}</p>
        </ListItem>
        <Collapse in={openCollapse}>{this.handleGenerateMenu()}</Collapse>
      </List>
    );
  };
}

export default withStyles(sidebarStyles)(SidebarMenu);
