import { SheetsRegistry, GenerateClassName } from "jss";
import { createMuiTheme, createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProviderProps } from "@material-ui/core/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e88e5",
      dark: "#1976d2",
      light: "#2196f3",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export interface PageContext extends MuiThemeProviderProps {
  generateClassName: GenerateClassName<string>;
  sheetsRegistry: SheetsRegistry;
}

const createPageContext = (): PageContext => {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
    children: undefined
  };
};

let pageContext: PageContext | undefined;

const getPageContext = (): PageContext => {
  // @ts-ignore
  if (!process.browser) {
    return createPageContext();
  }

  if (!pageContext) {
    pageContext = createPageContext();
  }

  return pageContext;
};

export default getPageContext;
