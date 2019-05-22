import { createStyles, Theme } from "@material-ui/core";

export const selectStyles = (theme: Theme) => createStyles({
  root: {
    margin: theme.spacing.unit * 0
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
  }
});
