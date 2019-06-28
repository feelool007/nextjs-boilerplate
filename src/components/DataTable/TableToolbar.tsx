import React from "react";
import { withStyles, Grid } from "@material-ui/core";

import { PTableToolbar, STableToolbar } from "./types";
import { toolbarStyles } from "./styles";
import Search from "./Search";
import CSVDownload from "./CSVDownload";

class TableToolbar extends React.Component<PTableToolbar, STableToolbar> {
  static defaultProps = {
    title: "",
    search: true,
    csv: true
  };

  // constructor(props: PTableToolbar) {
  //   super(props);
  //   this.state = {
  //     searchValue: ""
  //   };
  // }

  render = () => {
    const { title, search, SearchProps, csv, CSVDownloadProps, classes } = this.props;
    return (
      <Grid container alignItems="flex-end" justify="space-between" className={classes.root}>
        <div className={classes.title}>{title}</div>
        <div className={classes.actionContainer}>
          <Grid container alignItems="flex-end" spacing={3}>
            <Grid item>{search && <Search {...SearchProps} />}</Grid>
            <Grid item>{csv && <CSVDownload {...CSVDownloadProps} />}</Grid>
          </Grid>
        </div>
      </Grid>
    );
  };
}

export default withStyles(toolbarStyles)(TableToolbar);
