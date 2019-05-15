import React from "react";

import { ErrorPage, PErrorObject } from "../src/components";

interface PContent {
  statusCode: number
}

class Content extends React.Component<PContent> {
  static getInitialProps = (errObj: PErrorObject) => {
    const { res, err } = errObj;
    const statusCode = res ? res.statusCode : (err ? err.statusCode : null)
    return { statusCode }
  }

  render = () => {
    const { statusCode } = this.props;
    return <ErrorPage statusCode={statusCode} />;
  }
}

export default Content;
