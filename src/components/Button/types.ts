import { Omit } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

import { PThemeProvider } from "../ThemeProvider";

export interface PButton extends PThemeProvider, Omit<ButtonProps, "color"> {}
