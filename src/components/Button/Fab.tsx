import React from "react";
import { Fab as MuiFab } from "@material-ui/core";

import { PFab } from "./types";
import { ThemeProvider } from "../ThemeProvider";

class Fab extends React.Component<PFab> {
  static defaultProps = {
    color: "default"
  };

  render = () => {
    const { color, ...fabProps } = this.props;
    return (
      <ThemeProvider color={color}>
        <MuiFab color="primary" {...fabProps} />
      </ThemeProvider>
    );
  };
}

export default Fab;
