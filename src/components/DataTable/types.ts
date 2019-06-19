import { WithStyles, Omit } from "@material-ui/core";
import { TableProps } from "@material-ui/core/Table";

import { toolbarStyles, dataTableStyles } from "./styles";
import { PInput } from "../Input";

export type TableDataHeader<T = any> = {
  column: keyof T;
  label: string;
};

export type SortDirectionKeys = "asc" | "desc";

export interface PDataTable
  extends WithStyles<typeof dataTableStyles>,
    Omit<TableProps, "classes" | "title" | "onSelect"> {
  headers: Array<TableDataHeader>;
  data: Array<any>;
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
}

export interface PSearch extends WithStyles<typeof toolbarStyles>, Omit<PInput, "classes"> {
  onClear: () => void;
}

export interface SSearch {
  open: boolean;
}
