import { WithStyles } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { sidebarStyles } from "./styles";

export interface Page {
  name: string,
  to: string
}

export interface PageGroup {
  icon: React.ComponentType<SvgIconProps>,
  groupName?: string,
  pages: Page[]
}

export interface PSidebarMenu extends WithStyles<typeof sidebarStyles> {
  mini?: boolean,
  pageGroup: PageGroup
}

export interface SSidebarMenu {
  openCollapse: boolean,
  openPopover: boolean
}

export interface PSidebar extends WithStyles<typeof sidebarStyles> {
  brand?: string,
  mini?: boolean,
  rwdOpen?: boolean,
  pageGroups: PageGroup[],
  onToggleRwd: () => void
}
