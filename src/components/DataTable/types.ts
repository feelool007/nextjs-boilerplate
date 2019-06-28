import { WithStyles, Omit } from "@material-ui/core";
import { TableProps } from "@material-ui/core/Table";
import { LinkProps } from "react-csv/components/Link";

import { toolbarStyles, dataTableStyles } from "./styles";
import { PInput } from "../Input";

export type TableDataHeader<T = { [key: string]: any }> = {
  column: keyof T;
  label: string;
};

export type SortDirectionKeys = "asc" | "desc";

export interface PDataTable
  extends WithStyles<typeof dataTableStyles>,
    Omit<TableProps, "classes" | "title" | "onSelect"> {
  headers: Array<TableDataHeader>;
  data: Array<Object>;
  sort?: boolean;
  hover?: boolean;
  defaultSortDirection?: SortDirectionKeys;
  defaultSortBy?: string;
  select?: boolean;
  selectBy?: string;
  pick?: boolean;
  pickBy?: string;
  toolbar?: boolean;
  title?: React.ReactNode;
  search?: boolean;
  csv?: boolean;
  rowsPerPageOptions?: Array<number>;
  actions?: Array<React.ReactElement>;
  actionHeaders?: Array<string>;
  onSelect?: (selected: Array<any>) => void;
  onPick?: (picked: any) => void;
}

export interface SDataTable {
  sortBy: any;
  sortDirection: SortDirectionKeys;
  page: number;
  rowsPerPage: number;
  selected: Array<any>;
  picked: any;
  searchValue: string;
}

export interface PTableToolbar extends WithStyles<typeof toolbarStyles> {
  title?: React.ReactNode;
  search?: boolean;
  SearchProps: Omit<PSearch, "classes">;
  csv?: boolean;
  CSVDownloadProps: Omit<PCSVDownload, "classes">;
}

export interface STableToolbar {}

export interface PSearch extends WithStyles<typeof toolbarStyles>, Omit<PInput, "classes"> {
  onClear: () => void;
}

export interface SSearch {
  open: boolean;
  disableUnderline: boolean;
}

export interface PCSVDownload extends WithStyles<typeof toolbarStyles>, LinkProps {}
