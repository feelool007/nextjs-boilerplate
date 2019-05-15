import React from "react";
import { Dashboard, People } from "@material-ui/icons";

import { PLayout } from "./types";
import Wrapper from "./Wrapper";
import SidebarWrapper from "./SidebarWrapper";
import MainPanel from "./MainPanel";
import Container from "./Container";
import { Sidebar, PageGroup } from "../Sidebar";

const pages: PageGroup[] = [
  {
    icon: People,
    groupName: "Index",
    pages: [
      { name: "首頁001", to: "/" },
      { name: "首頁002", to: "/" },
      { name: "首頁003", to: "/" },
      { name: "首頁004", to: "/" },
      { name: "首頁005", to: "/" },
      { name: "首頁006", to: "/" },
      { name: "首頁007", to: "/" }
    ]
  },
  {
    icon: Dashboard,
    groupName: "About",
    pages: [
      { name: "關於001", to: "/about" },
      { name: "關於002", to: "/about" },
      { name: "關於003", to: "/about" },
      { name: "關於004", to: "/about" },
      { name: "關於005", to: "/about" },
      { name: "關於006", to: "/about" },
      { name: "關於007", to: "/about" }
    ]
  }
];

class Layout extends React.Component<PLayout> {
  render = () => {
    const { children } = this.props;
    return (
      <Wrapper>
        <SidebarWrapper>
          <Sidebar brand="NextJS Boilerplate" pageGroups={pages} />
        </SidebarWrapper>
        <MainPanel>
          <Container>This is header.</Container>
          <Container flex>
            {/* This is page content. */}
            {children}
          </Container>
          <Container>This is footer</Container>
        </MainPanel>
      </Wrapper>
    );
  };
}

export default Layout;
