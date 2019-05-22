import React from "react";
import { withStyles, FormControl, InputLabel, FormHelperText } from "@material-ui/core";

import { PSelect } from "./types";
import { selectStyles } from "./styles";
import SelectSingle from "./SelectSingle";
import SelectMulti from "./SelectMulti";
import { ThemeProvider } from "../ThemeProvider";

class Select extends React.Component<PSelect> {
  static defaultProps = {
    color: "default",
    options: [],
    multiple: false,
    label: "",
    helperText: "",
    required: false,
    error: false,
    fullWidth: false
  };

  render = () => {
    const {
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
            <SelectMulti multiple={true} {...SelectProps} />
          ) : (
            <SelectSingle multiple={false} {...SelectProps} />
          )}
          {helperText && <FormHelperText {...FormHelperText}>{helperText}</FormHelperText>}
        </FormControl>
      </ThemeProvider>
    );
  };
}

// @ts-ignore
export default withStyles(selectStyles)(Select);
