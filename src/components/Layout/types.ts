import { WithStyles } from "@material-ui/core";

import { layoutStyles } from "./styles";

export interface PWrapper extends WithStyles<typeof layoutStyles> {}

export interface PSidebarWrapper extends WithStyles<typeof layoutStyles> {}

export interface PMainPanel extends WithStyles<typeof layoutStyles> {}

export interface PContainer extends WithStyles<typeof layoutStyles> {
  flex?: boolean
}

export interface PLayout {}
