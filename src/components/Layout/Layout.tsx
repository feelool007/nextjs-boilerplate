import React from "react";
import { Dashboard, People } from "@material-ui/icons";

import { PLayout, SLayout } from "./types";
import Wrapper from "./Wrapper";
import SidebarWrapper from "./SidebarWrapper";
import MainPanel from "./MainPanel";
import Container from "./Container";
import { Sidebar, PageGroup } from "../Sidebar";
import { Header } from "../Header";

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
      { name: "錯誤007", to: "/nothing" }
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
      { name: "錯誤007", to: "/nothing" }
    ]
  }
];

class Layout extends React.Component<PLayout, SLayout> {
  constructor(props: PLayout) {
    super(props);
    this.state = {
      rwdOpen: false,
      mini: false
    }
  }

  handleToggleMini = () => {
    this.setState(prevState => ({
      rwdOpen: false,
      mini: !prevState.mini
    }));
  };

  handleToggleRwd = () => {
    this.setState(prevState => ({
      mini: false,
      rwdOpen: !prevState.rwdOpen
    }))
  };

  render = () => {
    const { children } = this.props;
    const { mini, rwdOpen } = this.state;
    return (
      <Wrapper>
        <SidebarWrapper>
          <Sidebar brand="NextJS Boilerplate" pageGroups={pages} mini={mini} rwdOpen={rwdOpen} onToggleRwd={this.handleToggleRwd} />
        </SidebarWrapper>
        <MainPanel>
          <Container>
            <Header pageName="Current Page" onToggleMini={this.handleToggleMini} onToggleRwd={this.handleToggleRwd}>
              You can put your own actions here.
            </Header>
          </Container>
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
