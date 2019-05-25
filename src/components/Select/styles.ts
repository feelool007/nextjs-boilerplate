import { createStyles, Theme } from "@material-ui/core";

export const selectStyles = (theme: Theme) => createStyles({
  root: {
    margin: theme.spacing.unit * 0
  },
  menu: {
    maxHeight: 435
  },
  menuItem: {
    margin: theme.spacing.unit * 0.5,
    "&:hover": {
      backgroundColor: "#f3e5f5"
    }
  },
  menuItemHighlight: {
    backgroundColor: "#ab47bc !important",
    color: "#FFFFFF"
  },
  menuItemHighlightMulti: {
    backgroundColor: "#FFFFFF !important"
  },
  icon: {
    color: "grey"
  },
  iconSearch: {
    marginRight: theme.spacing.unit * 1.5
  },
  iconClear: {
    cursor: "pointer"
  },
  searchContainer: {
    paddingLeft: theme.spacing.unit * 2.5,
    paddingRight: theme.spacing.unit * 2.5,
    marginBottom: theme.spacing.unit * 0.5
  }
});
