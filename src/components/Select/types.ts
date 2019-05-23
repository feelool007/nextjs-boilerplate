import { WithStyles, Omit } from "@material-ui/core";
import { SelectProps } from "@material-ui/core/Select";
import { FormControlProps } from "@material-ui/core/FormControl";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormHelperTextProps } from "@material-ui/core/FormHelperText";

import { selectStyles } from "./styles";
import { PThemeProvider } from "../ThemeProvider";

export type ChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>;

export interface SelectOption {
  value: string | number | Array<string>;
  label: string;
}

export interface PSelectBase extends Omit<SelectProps, "color" | "classes">, WithStyles<typeof selectStyles> {
  options: Array<SelectOption>;
  search: boolean;
}

export interface PSelectSearch extends WithStyles<typeof selectStyles> {
  searchValue: string;
  onSearchChange: ChangeEventHandler;
  onSearchClear: () => void;
}

export interface PSelectSingle extends PSelectBase, PSelectSearch {}

export interface PSelectMulti extends PSelectBase, PSelectSearch {}

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

export interface SSelect {
  searchValue: string;
}
