import React from "react";
import { withStyles } from "@material-ui/core";
import { Search as SearchIcon, Clear } from "@material-ui/icons";
import classNames from "classnames";

import { PSearch, SSearch } from "./types";
import { toolbarStyles } from "./styles";
import { Input } from "../Input";

class Search extends React.Component<PSearch, SSearch> {
  constructor(props: PSearch) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    const { onClear } = this.props;
    this.setState({ open: false });
    onClear();
  };

  render = () => {
    const { classes, ...InputProps } = this.props;
    const { open } = this.state;
    return (
      <Input
        {...InputProps}
        color="secondary"
        disableUnderline={!open}
        startAdornment={
          <SearchIcon
            className={classNames(classes.icon, {
              [classes.searchInput]: open,
              [classes.iconClickable]: !open,
              [classes.iconHighlight]: !open
            })}
            onClick={open ? undefined : this.handleOpen}
          />
        }
        endAdornment={
          open && (
            <Clear
              className={classNames(classes.icon, classes.iconClickable, classes.iconHighlight)}
              onClick={this.handleClose}
            />
          )
        }
        FormControlProps={{
          className: classNames(
            classes.searchContainer,
            classNames({
              [classes.searchContainerClose]: !open
            })
          )
        }}
      />
    );
  };
}

export default withStyles(toolbarStyles)(Search);
