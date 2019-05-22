import { WithStyles, Omit } from "@material-ui/core";
import { SelectProps } from "@material-ui/core/Select";
import { FormControlProps } from "@material-ui/core/FormControl";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

import { selectStyles } from "./styles";
import { PThemeProvider } from "../ThemeProvider";

export interface SelectOption {
  value: string | number | Array<string>;
  label: string;
}

export interface PSelectBase extends Omit<SelectProps, "color" | "classes">, WithStyles<typeof selectStyles> {
  options: Array<SelectOption>;
}

export interface PSelectSingle extends PSelectBase {}

export interface PSelectMulti extends PSelectBase {}

export interface PSelect extends PSelectBase, PThemeProvider {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  fullWidth: boolean;
  required?: boolean;
  error?: boolean;
  FormControlProps?: FormControlProps;
  InputLabelProps?: InputLabelProps;
  FormHelperTextProps?: FormHelperTextProps;
}
