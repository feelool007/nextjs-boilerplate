import React from "react";
import { WithStyles } from "@material-ui/core";
import { RouterProps } from "next/router";

import { layoutStyles } from "./styles";

export interface PWrapper extends WithStyles<typeof layoutStyles> {}

export interface PSidebarWrapper extends WithStyles<typeof layoutStyles> {}

export interface PMainPanel
  extends WithStyles<typeof layoutStyles>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface PContainer extends WithStyles<typeof layoutStyles> {
  flex?: boolean;
}

export interface PPageProgress extends WithStyles<typeof layoutStyles> {}

export interface PLayout {
  router: RouterProps;
}

export interface SLayout {
  rwdOpen: boolean;
  mini: boolean;
  loading: boolean;
  showScrollTop: boolean;
}

export interface PScrollTop extends WithStyles<typeof layoutStyles> {
  onClick?: () => void;
}
