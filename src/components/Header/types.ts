import { WithStyles } from "@material-ui/core";

import { headerStyles } from "./styles";

export interface PHeader extends WithStyles<typeof headerStyles> {
  onToggleMini: () => void,
  onToggleRwd: () => void,
  pageName?: string
}
