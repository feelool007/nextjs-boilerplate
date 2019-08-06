import React from "react";
import { withStyles, Tooltip } from "@material-ui/core";
import { Print } from "@material-ui/icons";
import ReactToPrint from "react-to-print";
import classNames from "classnames";

import { PPrintTable } from "./types";
import { toolbarStyles } from "./styles";

class PrintTable extends React.Component<PPrintTable> {
  render = () => {
    const { contentEl, classes } = this.props;
    return (
      <ReactToPrint
        trigger={() => (
          <Tooltip title="列印表格" classes={{ popper: classes.tooltip }}>
            <Print className={classNames(classes.icon, classes.iconHighlight, classes.iconClickable)} />
          </Tooltip>
        )}
        content={() => contentEl}
        pageStyle=""
      />
    );
  };
}

export default withStyles(toolbarStyles)(PrintTable);
