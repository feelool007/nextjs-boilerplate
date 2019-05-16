import React from "react";

import { PLayout, SLayout } from "./types";
import Wrapper from "./Wrapper";
import SidebarWrapper from "./SidebarWrapper";
import MainPanel from "./MainPanel";
import Container from "./Container";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { pageGroups } from "../../_helpers/fakeData";

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
          <Sidebar brand="NextJS Boilerplate" pageGroups={pageGroups} mini={mini} rwdOpen={rwdOpen} onToggleRwd={this.handleToggleRwd} />
        </SidebarWrapper>
        <MainPanel>
          <Container>
            <Header onToggleMini={this.handleToggleMini} onToggleRwd={this.handleToggleRwd}>
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
