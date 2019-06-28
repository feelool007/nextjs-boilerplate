import React from "react";
import { withStyles } from "@material-ui/styles";
import { CloudDownload } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import classNames from "classnames";

import { PCSVDownload } from "./types";
import { toolbarStyles } from "./styles";

class CSVDownload extends React.Component<PCSVDownload> {
  render = () => {
    const { classes, ...CSVLinkProps } = this.props;
    return (
      <CSVLink {...CSVLinkProps}>
        <CloudDownload
          className={classNames(classes.icon, classes.iconClickable, classes.iconHighlight)}
        />
      </CSVLink>
    );
  };
}

export default withStyles(toolbarStyles)(CSVDownload);
