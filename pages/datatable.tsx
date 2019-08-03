import React from "react";
import { withStyles, createStyles, Theme, Grid, Paper, WithStyles } from "@material-ui/core";

import { DataTable, TableDataHeader } from "../src/components";

type DataType = {
  index: number;
  name: string;
  gender: string;
  age: number;
  phone: number;
  email: string;
}

const data: Array<DataType> = [
  { index: 1, name: "John", gender: "male", age: 28, phone: 3456, email: "John@mail.com" },
  { index: 2, name: "Josh", gender: "male", age: 31, phone: 3456, email: "Josh@mail.com" },
  { index: 3, name: "Lynda", gender: "female", age: 25, phone: 3456, email: "Lynda@mail.com" },
  { index: 4, name: "Carol", gender: "female", age: 23, phone: 3456, email: "Carol@mail.com" },
  { index: 5, name: "Morgan", gender: "female", age: 30, phone: 3456, email: "Morgan@mail.com" },
  { index: 6, name: "Credo", gender: "male", age: 33, phone: 3456, email: "Credo@mail.com" },
  { index: 7, name: "Dante", gender: "male", age: 27, phone: 3456, email: "Dante@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" },
  { index: 8, name: "Sekiro", gender: "male", age: 28, phone: 3456, email: "Sekiro@mail.com" }
];

const headers: Array<TableDataHeader<DataType>> = [
  { column: "index", label: "序號" },
  { column: "name", label: "姓名" },
  { column: "gender", label: "性別" },
  { column: "age", label: "年紀" },
  { column: "phone", label: "電話" },
  { column: "email", label: "信箱" }
];

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "85%",
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    }
  });

interface PContent extends WithStyles<typeof styles> {}

interface SContent {
  selected: Array<any>;
  picked: any;
}

class Content extends React.Component<PContent, SContent> {
  constructor(props: PContent) {
    super(props);
    this.state = {
      selected: [],
      picked: ""
    };
  }

  handleSelect = (selected: Array<any>) => {
    this.setState({
      selected: selected
    });
  };

  handlePick = (picked: any) => {
    this.setState({
      picked: picked
    });
  };

  render = () => {
    const { classes } = this.props;
    return (
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.root}>
          <DataTable
            title="DataTable"
            data={data}
            headers={headers}
            select
            selectBy="index"
            onSelect={this.handleSelect}
          />
        </Paper>
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
