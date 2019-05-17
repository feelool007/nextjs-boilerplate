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
