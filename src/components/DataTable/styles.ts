import { createStyles, Theme } from "@material-ui/core";

export const toolbarStyles = (theme: Theme) => createStyles({
  root: {},
  icon: {
    fontSize: 24,
    color: "#9e9e9e"
  },
  iconClickable: {
    cursor: "pointer"
  },
  iconHighlight: {
    "&:hover": {
      color: "#616161"
    }
  },
  searchContainer: {
    transition: "width ease 0.2s"
  },
  searchContainerClose: {
    width: 24
  },
  searchInput: {
    marginRight: theme.spacing(1.5)
  }
});

export const dataTableStyles = (theme: Theme) => createStyles({
  root: {},
  tableWrapper: {
    overflowX: "auto"
  },
  table: {
    minWidth: 850
  },
  black: {
    color: "black"
  },
  header: {
    fontSize: "16pt",
    color: "black",
    backgroundColor: "#f5f5f5"
  },
  body: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fafafa"
    }
  },
  hover: {
    "&:hover": {
      backgroundColor: "#E1F5FE"
    }
  },
  pickable: {
    cursor: "pointer"
  },
  picked: {
    backgroundColor: "#FFEBEE !important"
  },
  tableCell: {
    maxWidth: 350
  }
});
