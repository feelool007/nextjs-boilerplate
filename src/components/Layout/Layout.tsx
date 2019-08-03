import React from "react";
import { withRouter } from "next/router";

import { PLayout, SLayout } from "./types";
import Wrapper from "./Wrapper";
import SidebarWrapper from "./SidebarWrapper";
import MainPanel from "./MainPanel";
import Container from "./Container";
import PageProgress from "./PageProgress";
import ScrollTop from "./ScrollTop";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { pages, pageGroups } from "../../_helpers/fakeData";

class Layout extends React.Component<PLayout, SLayout> {
  private __scrollTopThreshold: number = 450;

  constructor(props: PLayout) {
    super(props);
    this.state = {
      rwdOpen: false,
      mini: false,
      loading: false,
      showScrollTop: false
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

  handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = event => {
    this.setState({
      showScrollTop: event.currentTarget.scrollTop >= this.__scrollTopThreshold
    });
  };

  componentDidMount = () => {
    const { router } = this.props;
    router.events.on("routeChangeStart", this.handlePageStartLoading);
    router.events.on("routeChangeComplete", this.handlePageEndLoading);
    router.events.on("routeChangeError", this.handlePageEndLoading);
  };

  render = () => {
    const { children } = this.props;
    const { mini, rwdOpen, loading, showScrollTop } = this.state;
    return (
      <Wrapper>
        {loading && <PageProgress />}
        <SidebarWrapper>
          <Sidebar
            brand="NextJS Boilerplate"
            pages={pages}
            pageGroups={pageGroups}
            mini={mini}
            rwdOpen={rwdOpen}
            onToggleRwd={this.handleToggleRwd}
          />
        </SidebarWrapper>
        <MainPanel id="main-panel" onScroll={this.handleScroll}>
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
        {showScrollTop && <ScrollTop />}
      </Wrapper>
    );
  };
}

// @ts-ignore
export default withRouter(Layout);
