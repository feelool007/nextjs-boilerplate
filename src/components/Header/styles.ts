import { createStyles, Theme } from "@material-ui/core";

export const headerStyles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    height: 40
  },
  flex: {
    flex: 1
  },
  menuToggler: {
    fontSize: 18,
    cursor: "pointer",
    marginRight: theme.spacing.unit * 1.5
  }
})
