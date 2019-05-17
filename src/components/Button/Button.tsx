import React from "react";
import { Button as MuiButton } from "@material-ui/core";

import { PButton } from "./types";
import { ThemeProvider } from "../ThemeProvider";

class Button extends React.Component<PButton> {
  static defaultProps = {
    color: "default"
  }

  render() {
    const { color, ...buttonProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <MuiButton color="primary" {...buttonProps} />
      </ThemeProvider>
    );
  }
}

export default Button;
