import React from "react";
import { withStyles, Grid } from "@material-ui/core";

import { PTableToolbar, STableToolbar } from "./types";
import { toolbarStyles } from "./styles";
import Search from "./Search";

class TableToolbar extends React.Component<PTableToolbar, STableToolbar> {
  static defaultProps = {
    title: "",
    search: true
  };

  // constructor(props: PTableToolbar) {
  //   super(props);
  //   this.state = {
  //     searchValue: ""
  //   };
  // }

  render = () => {
    const { title, search, SearchProps, classes } = this.props;
    return (
      <Grid container alignItems="flex-end" justify="space-between" className={classes.root}>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.actionContainer}>
          {search && (
            <Search {...SearchProps} />
          )}
        </div>
      </Grid>
    );
  };
}

export default withStyles(toolbarStyles)(TableToolbar);
