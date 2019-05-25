import React from "react";
import { withStyles, FormControl, InputLabel, FormHelperText } from "@material-ui/core";

import { PSelect, SSelect, ChangeEventHandler, SelectOption } from "./types";
import { selectStyles } from "./styles";
import SelectSingle from "./SelectSingle";
import SelectMulti from "./SelectMulti";
import { ThemeProvider } from "../ThemeProvider";

class Select extends React.Component<PSelect, SSelect> {
  static defaultProps = {
    color: "default",
    options: [],
    multiple: false,
    label: "",
    helperText: "",
    required: false,
    error: false,
    fullWidth: false,
    search: true,
    all: false,
    allValue: "all",
    allLabel: "All"
  };

  constructor(props: PSelect) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleSearchChange: ChangeEventHandler = event => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  handleSearchClear = () => {
    this.setState({ searchValue: "" });
  };

  getOptions = () => {
    const { all, allValue, allLabel } = this.props;
    const { searchValue } = this.state;
    let options: Array<SelectOption>;
    if (!Boolean(searchValue)) {
      options = this.props.options;
    } else {
      options = this.props.options.filter(d => d.label.includes(searchValue));
    }
    if (all) {
      options = ([{ value: allValue, label: allLabel } as SelectOption]).concat(options)
    }
    return options;
  };

  render = () => {
    const {
      options: allOptions,
      color,
      multiple,
      label,
      helperText,
      required,
      error,
      fullWidth,
      FormControlProps,
      InputLabelProps,
      FormHelperTextProps,
      classes,
      ...SelectProps
    } = this.props;
    const { searchValue } = this.state;
    const options = this.getOptions();
    return (
      <ThemeProvider color={color}>
        <FormControl
          fullWidth={fullWidth}
          required={required}
          error={error}
          className={classes.root}
          {...FormControlProps}
        >
          <InputLabel shrink {...InputLabelProps}>
            {label}
          </InputLabel>
          {multiple ? (
            <SelectMulti multiple={true} searchValue={searchValue} options={options} onSearchChange={this.handleSearchChange} onSearchClear={this.handleSearchClear} {...SelectProps} />
          ) : (
            <SelectSingle multiple={false} searchValue={searchValue} options={options} onSearchChange={this.handleSearchChange} onSearchClear={this.handleSearchClear} {...SelectProps} />
          )}
          {helperText && <FormHelperText {...FormHelperText}>{helperText}</FormHelperText>}
        </FormControl>
      </ThemeProvider>
    );
  };
}

// @ts-ignore
export default withStyles(selectStyles)(Select);
