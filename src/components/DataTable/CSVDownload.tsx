import React from "react";
import { withStyles, Tooltip } from "@material-ui/core";
import { CloudDownload } from "@material-ui/icons";
import { CSVLink } from "react-csv";
import classNames from "classnames";

import { PCSVDownload } from "./types";
import { toolbarStyles } from "./styles";

class CSVDownload extends React.Component<PCSVDownload> {
  render = () => {
    const { classes, ...CSVLinkProps } = this.props;
    return (
      <Tooltip title="匯出CSV" classes={{ popper: classes.tooltip }}>
        <CSVLink {...CSVLinkProps}>
          <CloudDownload className={classNames(classes.icon, classes.iconClickable, classes.iconHighlight)} />
        </CSVLink>
      </Tooltip>
    );
  };
}

export default withStyles(toolbarStyles)(CSVDownload);
