import React, { ComponentType } from "react";
import Document, { Head, Main, NextScript, AnyPageProps } from "next/document";
import flush from "styled-jsx/server";

import { PageContext } from "../src/utils/getPageContext";

interface PDocument {
  pageContext: PageContext
}

class MyDocument extends Document<PDocument> {
  render = () => {
    const { pageContext } = this.props;
    const theme =
      typeof pageContext.theme === "function"
        ? pageContext.theme(null)
        : pageContext.theme;

    return (
      <html lang="zh-TW">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <style type="text/css">{`
            html * {
              font-family: Arial, Helvetica, 'Microsoft JhenHei' !important;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  };
}

interface PPageWithPageContext extends AnyPageProps {
  pageContext: PageContext
}

MyDocument.getInitialProps = ctx => {
  let pageContext: PageContext | undefined;

  const page = ctx.renderPage((Component: ComponentType<PPageWithPageContext>) => {
    const WrappedComponent: ComponentType<PPageWithPageContext> = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    }

    return WrappedComponent;
  })

  let css: string | undefined;
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style id="jss-server-side">{css}</style>
        {flush() || null}
      </React.Fragment>
    )
  }
}

export default MyDocument;
