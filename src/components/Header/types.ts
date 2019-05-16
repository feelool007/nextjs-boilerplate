import { WithStyles } from "@material-ui/core";
import { RouterProps } from "next/router";

import { headerStyles } from "./styles";

export interface PHeader extends WithStyles<typeof headerStyles> {
  onToggleMini: () => void,
  onToggleRwd: () => void,
  router: RouterProps
}
