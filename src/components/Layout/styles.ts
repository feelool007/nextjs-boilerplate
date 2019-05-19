import { createStyles, Theme } from "@material-ui/core";

export const layoutStyles = (theme: Theme) => createStyles({
  wrapper: {
    display: "flex",
    position: "relative",
    height: "100vh",
    width: "100vw"
  },
  sidebarWrapper: {
    height: "100%"
  },
  mainPanel: {
    flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    overflowX: "auto"
  },
  container: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    position: "relative"
  },
  flex: {
    flex: 1
  },
  progress: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    zIndex: 9999
  }
});
