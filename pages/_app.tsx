import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../src/utils/theme";
import { Layout } from "../src/components/Layout";

class MyApp extends App {
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
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
      </Container>
    );
  };
}

export default MyApp;
