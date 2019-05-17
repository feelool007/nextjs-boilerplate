import React from "react";
import { withRouter } from "next/router";

import { PLayout, SLayout } from "./types";
import Wrapper from "./Wrapper";
import SidebarWrapper from "./SidebarWrapper";
import MainPanel from "./MainPanel";
import Container from "./Container";
import PageProgress from "./PageProgress";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { pageGroups } from "../../_helpers/fakeData";

class Layout extends React.Component<PLayout, SLayout> {
  constructor(props: PLayout) {
    super(props);
    this.state = {
      rwdOpen: false,
      mini: false,
      loading: false
    };
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
    }));
  };

  handlePageStartLoading = () => {
    this.setState({ loading: true });
  };

  handlePageEndLoading = () => {
    this.setState({ loading: false });
  };

  componentDidMount = () => {
    const { router } = this.props;
    router.events.on("routeChangeStart", this.handlePageStartLoading);
    router.events.on("routeChangeComplete", this.handlePageEndLoading);
    router.events.on("routeChangeError", this.handlePageEndLoading);
  };

  render = () => {
    const { children } = this.props;
    const { mini, rwdOpen, loading } = this.state;
    return (
      <Wrapper>
        {loading && <PageProgress />}
        <SidebarWrapper>
          <Sidebar
            brand="NextJS Boilerplate"
            pageGroups={pageGroups}
            mini={mini}
            rwdOpen={rwdOpen}
            onToggleRwd={this.handleToggleRwd}
          />
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
          <Container>
            <Footer />
          </Container>
        </MainPanel>
      </Wrapper>
    );
  };
}

// @ts-ignore
export default withRouter(Layout);
