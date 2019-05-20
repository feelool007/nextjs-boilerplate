import React from "react";
import { Omit } from "@material-ui/core";
import { RadioProps } from "@material-ui/core/Radio";
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel";

import { PThemeProvider } from "../ThemeProvider";

export interface PRadio extends PThemeProvider, Omit<RadioProps, "color"> {
  value?: string;
  label: React.ReactNode;
  formControlLabelProps?: FormControlLabelProps
}
