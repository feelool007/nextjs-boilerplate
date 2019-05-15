import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import JssProvider from "react-jss/lib/JssProvider";

import getPageContext, { PageContext } from "../src/utils/getPageContext";
import { Layout } from "../src/components/Layout";

class MyApp extends App {
  private pageContext: PageContext;

  constructor() {
    //@ts-ignore
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount = () => {
    // remove server side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  };

  render = () => {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>NextJS App</title>
        </Head>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <Layout>
              <Component pageContext={this.pageContext} {...pageProps} />
            </Layout>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  };
}

export default MyApp;
