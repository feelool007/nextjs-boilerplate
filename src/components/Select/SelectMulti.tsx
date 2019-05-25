import React from "react";
import { withStyles, Select, MenuItem } from "@material-ui/core";
import { SelectProps } from "@material-ui/core/Select";

import { PSelectMulti, SelectOptionValue } from "./types";
import { selectStyles } from "./styles";
import SelectSearch from "./SelectSearch";
import { Checkbox } from "../Checkbox";

class SelectMulti extends React.Component<PSelectMulti> {
  static defaultProps = {
    options: []
  };

  handleChange: SelectProps["onChange"] = (event, child) => {
    const { onChange, all, allValue } = this.props;
    const { value } = event.target;
    if (all && value[value.length - 1] === allValue) {
      if (this.isCheckedAll()) {
        event.target.value = [];
      } else {
        // remove all option, first value.
        const options = this.props.options.slice(1);
        event.target.value = options.map(d => d.value);
      }
    }
    onChange && onChange(event, child);
  };

  getRenderValue: PSelectMulti["renderValue"] = value => {
    return (value as Array<any>).join(", ");
  };

  isChecked = (optionValue: SelectOptionValue): boolean => {
    const { value, all, allValue } = this.props;
    if (all && optionValue === allValue) {
      return this.isCheckedAll();
    } else {
      return (value as Array<any>).includes(optionValue);
    }
  };

  isCheckedAll = (): boolean => {
    const { value } = this.props;
    // remove all option, first value.
    const options = this.props.options.slice(1);
    // check if every options is in value.
    return options.every(d => (value as Array<any>).includes(d.value));
  };

  render = () => {
    const {
      options,
      search,
      searchValue,
      onSearchChange,
      onSearchClear,
      classes,
      all,
      allValue,
      allLabel,
      ...SelectProps
    } = this.props;
    return (
      <Select
        renderValue={this.getRenderValue}
        MenuProps={{ className: classes.menu }}
        {...SelectProps}
        onChange={this.handleChange}
      >
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
