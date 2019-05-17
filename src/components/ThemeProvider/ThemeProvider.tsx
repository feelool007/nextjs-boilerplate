import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { cyan, purple, green, orange, red, grey } from "@material-ui/core/colors";

import { PThemeProvider, ThemeColors } from "./types";

const themePrimary = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: cyan
  }
})

const themeSecondary = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: purple
  }
})

const themeSuccess = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: green
  }
})

const themeWarning = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: orange
  }
})

const themeDanger = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: red
  }
})

const themeDefault = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: grey
  }
})

const themes: ThemeColors = {
  primary: themePrimary,
  secondary: themeSecondary,
  success: themeSuccess,
  warning: themeWarning,
  danger: themeDanger,
  default: themeDefault
}

class ThemeProvider extends React.Component<PThemeProvider> {
  static defaultProps = {
    color: "default"
  }

  render = () => {
    const { color, children } = this.props;
    const theme = themes[(color as string)];
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
