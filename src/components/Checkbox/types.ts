import { Omit } from "@material-ui/core";
import { CheckboxProps } from "@material-ui/core/Checkbox";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

import { PThemeProvider } from "../ThemeProvider";

export interface PCheckbox extends PThemeProvider, Omit<CheckboxProps, "color"> {
  value?: string;
  label: string;
  formControlLabelProps?: FormControlLabelProps
}
