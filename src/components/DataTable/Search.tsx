import React from "react";
import { withStyles } from "@material-ui/core";
import { Search as SearchIcon, Clear } from "@material-ui/icons";
import classNames from "classnames";

import { PSearch, SSearch } from "./types";
import { toolbarStyles } from "./styles";
import { Input } from "../Input";

class Search extends React.Component<PSearch, SSearch> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props: PSearch) {
    super(props);
    this.state = {
      open: false,
      disableUnderline: true
    };
  }

  handleOpen = () => {
    this.inputRef.current!.focus();
    this.setState({
      open: true,
      disableUnderline: false
    });
  };

  handleClose = () => {
    const { onClear } = this.props;
    this.inputRef.current!.blur();
    this.setState({ open: false });
    onClear();
  };

  handleDisableUnderline = () => {
    const { open } = this.state;
    if (!open) {
      this.setState({ disableUnderline: true });
    }
  };

  render = () => {
    const { classes, ...InputProps } = this.props;
    const { open, disableUnderline } = this.state;
    return (
      <Input
        {...InputProps}
        inputRef={this.inputRef}
        color="secondary"
        disableUnderline={disableUnderline}
        startAdornment={
          <SearchIcon
            className={classNames(classes.icon, {
              [classes.iconSearchInput]: open,
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
              [classes.searchContainerOpen]: open,
              [classes.searchContainerClose]: !open
            })
          ),
          onTransitionEnd: this.handleDisableUnderline
        }}
      />
    );
  };
}

export default withStyles(toolbarStyles)(Search);
