import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TableSortLabel,
  withStyles
} from "@material-ui/core";
import { TablePaginationProps } from "@material-ui/core/TablePagination";
import classNames from "classnames";

import { PDataTable, SDataTable, SortDirectionKeys } from "./types";
import { dataTableStyles } from "./styles";
import { Checkbox } from "../Checkbox";

class DataTable extends React.Component<PDataTable, SDataTable> {
  static defaultProps = {
    sort: true,
    hover: true,
    defaultSortDirection: "asc",
    select: false,
    pick: false,
    toolbar: true,
    title: "",
    rowsPerPageOptions: [10, 25, 50],
    actions: [],
    actionHeaders: []
  };

  constructor(props: PDataTable) {
    super(props);
    // let filters = {};
    // props.headers.forEach(h => {
    //   filters[h.column] = {
    //     label: h.label,
    //     visible: true
    //   };
    // });
    this.state = {
      sortBy: props.defaultSortBy || props.headers[0].column,
      sortDirection: props.defaultSortDirection!,
      page: 0,
      rowsPerPage: props.rowsPerPageOptions![0],
      selected: [],
      picked: ""
      // search: "",
      // filters
    };
    // this.data = [];
    // this.dataCount = 0;
    // this.csvHeaders =
    //   props.csvHeaders ||
    //   props.headers.map(d => ({
    //     ...d,
    //     key: d.column
    //   }));
    // this.__refToPrint = React.createRef();
  }

  handleChangePage: TablePaginationProps["onChangePage"] = (_, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage: TablePaginationProps["onChangeRowsPerPage"] = event => {
    const { value } = event.target;
    this.setState({
      rowsPerPage: Number(value)
    });
  };

  getLabelDisplayedRows: TablePaginationProps["labelDisplayedRows"] = ({ from, to, count }) => {
    return `第${from} - ${to}筆，共${count}筆`;
  };

  handleChangeSort = (nextSortBy: string) => {
    const { sortBy, sortDirection } = this.state;
    let nextSortDirection: SortDirectionKeys;
    if (sortDirection === "asc") {
      nextSortDirection = nextSortBy === sortBy ? "desc" : "asc";
    } else {
      nextSortDirection = nextSortBy === sortBy ? "asc" : "desc";
    }
    this.setState({
      sortBy: nextSortBy,
      sortDirection: nextSortDirection
    });
  };

  getSortedData = (data: Array<any>) => {
    const { sortBy, sortDirection } = this.state;
    data.sort((a, b) => {
      if (a[sortBy] === b[sortBy]) {
        // 值相等則不更動順序
        return 0;
      }
      if (sortDirection === "asc") {
        // 遞增，小的在前面
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        // 遞減，大的在前面
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });
    return data;
  };

  getPageData = (data: Array<any>) => {
    const { page, rowsPerPage } = this.state;
    data = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    return data;
  };

  isSelected = (value: any) => this.state.selected.includes(value);

  isSelectAll = () => {
    const { selectBy, data } = this.props;
    const { selected } = this.state;
    const values = data.map(d => d[selectBy!]);
    return selected.length > 0 && values.every(this.isSelected);
  };

  handleSelect = (value: any) => {
    let oldSelected = [...this.state.selected];
    let newSelected = [];
    let index = oldSelected.indexOf(value);
    let { onSelect } = this.props;

    if (index === -1) {
      newSelected = oldSelected.concat(value);
    } else {
      oldSelected.splice(index, 1);
      newSelected = [...oldSelected];
    }
    this.setState({ selected: newSelected }, () => {
      onSelect!(this.state.selected);
    });
  };

  handleSelectAll = () => {
    let newSelected: Array<any>;
    const { onSelect, selectBy, data } = this.props;
    if (this.isSelectAll()) {
      newSelected = [];
    } else {
      newSelected = data.map(d => d[selectBy!]);
    }
    this.setState({ selected: newSelected }, () => {
      onSelect!(this.state.selected);
    });
  };

  isPick = (value: any) => value === this.state.picked;

  // handleChangeSearch = event => {
  //   this.setState({ search: event.target.value });
  // };

  // getFiltedData = () => {
  //   const { headers } = this.props;
  //   const { search } = this.state;
  //   if (search !== "") {
  //     this.data = this.data.filter(d => {
  //       // 只要其中一欄資料有包含search，就回傳true
  //       return headers.some(h => {
  //         if (!d[h.column]) return false;
  //         return d[h.column].toString().includes(search);
  //       });
  //     });
  //     // return filted data length
  //     this.dataCount = this.data.length;
  //   } else {
  //     // if search is empty, return full data length
  //     this.dataCount = this.props.data.length;
  //   }
  // };

  // handleResetSearch = () => {
  //   this.setState({ search: "" });
  // };

  handlePick = (value: any) => () => {
    let { pick, onPick } = this.props;
    if (pick) {
      this.setState(
        prevState => ({
          picked: prevState.picked === value ? "" : value
        }),
        () => {
          onPick!(this.state.picked);
        }
      );
    }
  };

  // handleChangeFilter = (event, checked) => {
  //   const { name } = event.target;
  //   this.setState(prevState => ({
  //     filters: {
  //       ...prevState.filters,
  //       [name]: {
  //         label: prevState.filters[name].label,
  //         visible: checked
  //       }
  //     }
  //   }));
  // };

  // formatContent = val => {
  //   const { search } = this.state;
  //   if (search.length > 0) {
  //     let subset = val.toString().split(search);
  //     return subset.map((d, index) => {
  //       if (index === subset.length - 1) {
  //         return d;
  //       } else {
  //         return (
  //           <React.Fragment key={index}>
  //             {d}
  //             <mark>{search}</mark>
  //           </React.Fragment>
  //         );
  //       }
  //     });
  //   } else {
  //     return val;
  //   }
  // };

  getContent = () => {
    const { sort } = this.props;
    // TODO: column filter
    let data = this.props.data.map((d, index) => {
      return {
        ...d,
        dataIX: index
      }
    });
    if (sort) {
      data = this.getSortedData(data);
      data = this.getPageData(data);
    }
    // TODO: search
    return data;
  };

  render = () => {
    let {
      classes,
      headers,
      actions,
      actionHeaders,
      rowsPerPageOptions,
      title,
      sort,
      hover,
      select,
      selectBy,
      pick,
      pickBy
      // toolbar,
      // title,
      // searchable,
      // filterble,
      // csv,
      // csvFilename,
      // printable,
      // minWidth,
      // components,
      // getTableRowStyle,
    } = this.props;
    // let { TBodyCell } = components;
    const { page, rowsPerPage, sortBy, sortDirection } = this.state;
    const columns = headers.map(h => h.column);
    const data = this.getContent();

    return (
      <Paper className={classes.root}>
        {/* {toolbar && (
          <React.Fragment>
            <Hidden smDown>
              <TableToolbar
                data={this.props.data}
                title={title}
                searchable={searchable}
                filterble={filterble}
                searchValue={search}
                filters={filters}
                csv={csv}
                csvFilename={csvFilename}
                csvHeaders={this.csvHeaders}
                printable={printable}
                printComponentRef={this.__refToPrint.current}
                onSearch={this.handleChangeSearch}
                onResetSearch={this.handleResetSearch}
                onFilter={this.handleChangeFilter}
              />
            </Hidden>
            <Hidden mdUp>
              <TableToolbar
                mini
                data={this.props.data}
                title={title}
                searchable={searchable}
                filterble={filterble}
                searchValue={search}
                filters={filters}
                csv={csv}
                csvFilename={csvFilename}
                csvHeaders={this.csvHeaders}
                printable={printable}
                printComponentRef={this.__refToPrint.current}
                onSearch={this.handleChangeSearch}
                onResetSearch={this.handleResetSearch}
                onFilter={this.handleChangeFilter}
              />
            </Hidden>
          </React.Fragment>
        )} */}
        <Table padding="default" size="small">
          <TableHead>
            <TableRow className={classes.header}>
              {select && (
                // if select, show checkbox on head
                <TableCell padding="checkbox">
                  <Checkbox color="secondary" checked={this.isSelectAll()} onChange={this.handleSelectAll} />
                </TableCell>
              )}
              {headers.map((header, index) => {
                return (
                  <TableCell key={index}>
                    <TableSortLabel
                      active={sort && sortBy === header.column}
                      direction={sortDirection}
                      onClick={() => this.handleChangeSort(header.column)}
                    >
                      {header.label}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
              {// show row actions
              actions!.map((_, index) => {
                return <TableCell key={index}>{actionHeaders![index] || `動作${index + 1}`}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d, rowIX) => {
              return (
                <TableRow
                  key={rowIX}
                  className={classNames(classes.body, {
                    [classes.hover]: hover,
                    [classes.pickable]: pick,
                    [classes.picked]: this.isPick(d[pickBy!])
                  })}
                  onClick={this.handlePick(d[pickBy!])}
                >
                  {select && (
                    // if select, show checkbox on each row
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="secondary"
                        checked={this.isSelected(d[selectBy!])}
                        onChange={() => this.handleSelect(d[selectBy!])}
                      />
                    </TableCell>
                  )}
                  {columns.map((col, colIX) => {
                    return (
                      // (TBodyCell ? (
                      //   <TBodyCell
                      //     key={colIX}
                      //     column={col}
                      //     columnIndex={colIX}
                      //     data={d}
                      //     value={this.formatContent(d[col])}
                      //   />
                      // ) : (
                      //   <TableCell key={colIX} className={classes.tableCell}>
                      //     {this.formatContent(d[col])}
                      //   </TableCell>
                      // ))
                      <TableCell key={colIX} className={classes.tableCell}>
                        {/* {this.formatContent(d[col])} */}
                        {d[col]}
                      </TableCell>
                    );
                  })}
                  {// show row actions
                  actions!.map((action, childIX) => {
                    return (
                      <TableCell key={childIX}>
                        {React.cloneElement(action, {
                          data: d
                        })}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={data.length}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          labelRowsPerPage={"每頁顯示："}
          labelDisplayedRows={this.getLabelDisplayedRows}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  };
}

export default withStyles(dataTableStyles)(DataTable);
