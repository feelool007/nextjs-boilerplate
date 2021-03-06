import { Omit } from "@material-ui/core";
import { IconButtonProps } from "@material-ui/core/IconButton";

import { PThemeProvider } from "../ThemeProvider";

export interface PIconButton extends PThemeProvider, Omit<IconButtonProps, "color"> {}
