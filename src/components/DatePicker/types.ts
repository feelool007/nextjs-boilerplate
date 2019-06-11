import { Omit } from "@material-ui/core";
import { FormControlProps } from "@material-ui/core/FormControl";
import { ReactDatePickerProps } from "react-datepicker";

import { PThemeProvider } from "../ThemeProvider";
import { PInput } from "../Input";

export interface PDatePicker extends PThemeProvider, ReactDatePickerProps {
  label?: PInput["label"];
  InputProps?: Omit<PInput, "classes">;
  FormControlProps?: FormControlProps;
}
