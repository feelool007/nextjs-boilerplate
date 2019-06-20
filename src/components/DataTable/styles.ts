import { createStyles, Theme } from "@material-ui/core";

export const toolbarStyles = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(2)
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    "&:child": {
      marginRight: theme.spacing(2)
    }
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  icon: {
    fontSize: 26,
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
    transition: "width ease 0.2s",
    paddingTop: 0
  },
  searchContainerOpen: {
    width: 240
  },
  searchContainerClose: {
    width: 26
  },
  iconSearchInput: {
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
