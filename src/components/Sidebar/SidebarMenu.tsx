import React from "react";
import { List, ListItem, ListItemText, Collapse, Paper, Popper, withStyles } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import Link from "next/link";
import { withRouter } from "next/router";
import classNames from "classnames";

import { PSidebarMenu, SSidebarMenu } from "./types";
import { sidebarStyles } from "./styles";

class SidebarMenu extends React.Component<PSidebarMenu, SSidebarMenu> {
  static defaultProps = {
    mini: false
  };

  private __ref: React.RefObject<HTMLButtonElement>;

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

  handleBlur = () => {
    const listItems = document.getElementsByName("li-item");
    listItems.forEach(el => el.blur());
  };

  handleGenerateMenu = () => {
    const { router, classes } = this.props;
    const { pages } = this.props.pageGroup;
    return pages.map((d, index) => {
      return (
        <Link key={index} href={d.to}>
          <ListItem
            button
            name="li-item"
            className={classNames({
              [classes.menuItem]: true,
              [classes.menuItemHighlight]: d.to === router.pathname
            })}
            onClick={this.handleBlur}
          >
            <ListItemText
              primary={d.name}
              classes={{
                primary: classNames({
                  [classes.menuItemText]: true,
                  [classes.menuItemTextHighlight]: d.to === router.pathname
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
          <div className={classes.flex}>
            <p className={classes.menuText}>{groupName}</p>
          </div>
          {openCollapse ? <KeyboardArrowUp className={classes.icon} /> : <KeyboardArrowDown className={classes.icon} />}
        </ListItem>
        <Collapse in={openCollapse}>{this.handleGenerateMenu()}</Collapse>
      </List>
    );
  };
}

// There is a bug in withRouter type checking. Keep it quiet until fixed.
// @ts-ignore
export default withStyles(sidebarStyles)(withRouter(SidebarMenu));
