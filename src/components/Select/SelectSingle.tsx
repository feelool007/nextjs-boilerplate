import React from "react";
import { withStyles, Select, MenuItem } from "@material-ui/core";

import { PSelectSingle, SelectOption } from "./types";
import { selectStyles } from "./styles";

class SelectSingle extends React.Component<PSelectSingle> {
  isSelected = (optionValue: SelectOption["value"]): boolean => {
    const { value } = this.props;
    return optionValue === value;
  };

  render = () => {
    const { options, classes, ...SelectProps } = this.props;
    return (
      <Select {...SelectProps}>
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
