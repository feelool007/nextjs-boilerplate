import React from "react";
import { withStyles, Select, MenuItem } from "@material-ui/core";

import { PSelectMulti, SelectOption } from "./types";
import { selectStyles } from "./styles";
import SelectSearch from "./SelectSearch";
import { Checkbox } from "../Checkbox";

class SelectMulti extends React.Component<PSelectMulti> {
  static defaultProps = {
    options: []
  };

  getRenderValue: PSelectMulti["renderValue"] = value => {
    return (value as Array<any>).join(", ");
  };

  isChecked = (optionValue: SelectOption["value"]): boolean => {
    const { value } = this.props;
    return (value as Array<any>).includes(optionValue);
  };

  render = () => {
    const { options, search, searchValue, onSearchChange, onSearchClear, classes, ...SelectProps } = this.props;
    return (
      <Select renderValue={this.getRenderValue} {...SelectProps}>
        {search && (
          <SelectSearch searchValue={searchValue} onSearchChange={onSearchChange} onSearchClear={onSearchClear} />
        )}
        {options.map((d, index) => {
          return (
            <MenuItem
              key={index}
              value={d.value}
              className={classes.menuItem}
              classes={{
                selected: classes.menuItemHighlightMulti
              }}
            >
              <Checkbox checked={this.isChecked(d.value)} color="secondary" label={d.label} />
            </MenuItem>
          );
        })}
      </Select>
    );
  };
}

export default withStyles(selectStyles)(SelectMulti);
