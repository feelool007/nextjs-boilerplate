import { Theme } from "@material-ui/core";

export type ThemeVariantKeys = "primary" | "secondary" | "success" | "warning" | "danger" | "default";

export interface PThemeProvider {
  variant?: ThemeVariantKeys;
}

export interface ThemeVariants {
  primary: Theme;
  secondary: Theme;
  success: Theme;
  warning: Theme;
  danger: Theme;
  default: Theme;
  [key: string]: Theme;
}
