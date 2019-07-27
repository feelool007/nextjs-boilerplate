import React from "react";
import { withStyles } from "@material-ui/core";
import { Search, Close } from "@material-ui/icons";
import classNames from "classnames";

import { PSelectSearch } from "./types";
import { selectStyles } from "./styles";
import { Input } from "../Input";

class SelectSearch extends React.Component<PSelectSearch> {
  render = () => {
    const { searchValue, searchRef, onSearchChange, onSearchClear, classes } = this.props;
    return (
      <Input
        fullWidth
        value={searchValue}
        inputRef={searchRef}
        onChange={onSearchChange}
        startAdornment={
          <Search
            className={classNames({
              [classes.icon]: true,
              [classes.iconSearch]: true
            })}
          />
        }
        endAdornment={
          <Close
            onClick={onSearchClear}
            className={classNames({
              [classes.icon]: true,
              [classes.iconClear]: true
            })}
          />
        }
        FormControlProps={{
          className: classes.searchContainer
        }}
      />
    );
  };
}

export default withStyles(selectStyles)(SelectSearch);
