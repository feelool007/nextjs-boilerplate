import React from "react";
import { FormControlLabel, Radio as MuiRadio } from "@material-ui/core";

import { PRadio } from "./types";
import { ThemeProvider } from "../ThemeProvider";

class Radio extends React.Component<PRadio> {
  static defaultProps = {
    color: "default"
  };

  render = () => {
    const { color, value, label, formControlLabelProps, ...RadioProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <FormControlLabel
          value={value}
          label={label}
          control={<MuiRadio color="primary" {...RadioProps} />}
          {...formControlLabelProps}
        />
      </ThemeProvider>
    );
  };
}

export default Radio;
