import React from "react";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

import { PContainer } from "./types";
import { layoutStyles } from "./styles";

class Container extends React.Component<PContainer> {
  static defaultProps = {
    flex: false
  };

  render = () => {
    const { flex, children, classes, ...divProps } = this.props;
    return (
      <div
        className={classNames({
          [classes.container]: true,
          [classes.flex]: flex
        })}
        {...divProps}
      >
        {children}
      </div>
    );
  };
}

export default withStyles(layoutStyles)(Container);
