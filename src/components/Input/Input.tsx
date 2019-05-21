import React from "react";
import { withStyles, FormControl, InputLabel, Input as MuiInput, FormHelperText } from "@material-ui/core";

import { PInput } from "./types";
import { inputStyles } from "./styles";
import { ThemeProvider } from "../ThemeProvider";

class Input extends React.Component<PInput> {
  static defaultProps = {
    label: "",
    helperText: "",
    required: false,
    error: false,
    fullWidth: false
  };

  render = () => {
    const {
      color,
      label,
      value,
      helperText,
      fullWidth,
      required,
      error,
      FormControlProps,
      InputLabelProps,
      FormHelperTextProps,
      classes,
      ...InputProps
    } = this.props;
    return (
      <ThemeProvider color={color}>
        <FormControl fullWidth={fullWidth} required={required} error={error} className={classes.root} {...FormControlProps}>
          <InputLabel {...InputLabelProps}>{label}</InputLabel>
          <MuiInput value={value} {...InputProps} />
          {helperText && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
        </FormControl>
      </ThemeProvider>
    );
  };
}

export default withStyles(inputStyles)(Input);
