import React from "react";
import { withStyles, Select, MenuItem } from "@material-ui/core";

import { PSelectSingle, SelectOption } from "./types";
import { selectStyles } from "./styles";
import SelectSearch from "./SelectSearch";

class SelectSingle extends React.Component<PSelectSingle> {
  isSelected = (optionValue: SelectOption["value"]): boolean => {
    const { value } = this.props;
    return optionValue === value;
  };

  render = () => {
    const { options, search, searchValue, onSearchChange, onSearchClear, classes, ...SelectProps } = this.props;
    return (
      <Select {...SelectProps}>
        {search && (
          <SelectSearch searchValue={searchValue} onSearchChange={onSearchChange} onSearchClear={onSearchClear} />
        )}
        {options.map((d, index) => {
          return (
            <MenuItem
              key={index}
              selected={this.isSelected(d.value)}
              value={d.value}
              className={classes.menuItem}
              classes={{
                selected: classes.menuItemHighlight
              }}
            >
              {d.label}
            </MenuItem>
          );
        })}
      </Select>
    );
  };
}

export default withStyles(selectStyles)(SelectSingle);