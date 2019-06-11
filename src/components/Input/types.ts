import { Omit, WithStyles } from "@material-ui/core";
import { InputProps } from "@material-ui/core/Input";
import { FormControlProps } from "@material-ui/core/FormControl";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

import { PThemeProvider } from "../ThemeProvider";
import { inputStyles } from "./styles";

export interface PInput extends PThemeProvider, Omit<InputProps, "color" | "classes">, WithStyles<typeof inputStyles> {
  label?: React.ReactNode;
  value?: InputProps["value"];
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  error?: boolean;
  FormControlProps?: FormControlProps;
  InputLabelProps?: InputLabelProps;
  FormHelperTextProps?: FormHelperTextProps;
}
