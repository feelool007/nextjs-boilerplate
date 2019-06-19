import { Dashboard, People } from "@material-ui/icons";

import { PageGroup } from "../components/Sidebar";

export const pageGroups: PageGroup[] = [
  {
    icon: People,
    groupName: "Index",
    pages: [
      { name: "index", to: "/" },
      { name: "Notifications", to: "/notifications" },
      { name: "Buttons", to: "/buttons" },
      { name: "Selection Controls", to: "/selection-controls" },
      { name: "Form", to: "/form" },
      { name: "DataTable", to: "/datatable" }
    ]
  },
  {
    icon: Dashboard,
    groupName: "About",
    pages: [
      { name: "About", to: "/about" },
      { name: "ErrorPage", to: "/nothing" }
    ]
  }
];
