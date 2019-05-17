import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { lightBlue, purple, green, orange, red, grey } from "@material-ui/core/colors";

import { PThemeProvider, ThemeVariants } from "./types";

const themePrimary = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: lightBlue
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

const themes: ThemeVariants = {
  primary: themePrimary,
  secondary: themeSecondary,
  success: themeSuccess,
  warning: themeWarning,
  danger: themeDanger,
  default: themeDefault
}

class ThemeProvider extends React.Component<PThemeProvider> {
  static defaultProps = {
    variant: "default"
  }

  render = () => {
    const { variant, children } = this.props;
    const theme = themes[(variant as string)];
    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
