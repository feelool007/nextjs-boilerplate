import { createStyles, Theme } from "@material-ui/core";

export const sidebarStyles = (theme: Theme) => createStyles({
  rootBasic: {
    backgroundColor: "#2c2c2c",
    position: "relative",
    height: "100vh",
    overflowX: "hidden",
    transition: "width 0.2s"
  },
  rootMini: {
    width: 60
  },
  rootNormal: {
    width: 260
  },
  brandContainer: {
    width: "100%",
    overflow: "hidden"
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(235, 235, 235)",
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 1,
    borderBottom: "0.3mm solid white"
  },
  brandMini: {
    fontSize: 20,
    textAlign: "center",
    color: "rgb(235, 235, 235)",
  },
  menuRoot: {
    padding: 0
  },
  menu: {
    fontSize: 16,
    height: 55
  },
  popperMenu: {
    backgroundColor: "#424242",
    width: 240,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
  },
  menuOpen: {
    color: "#00ACC1"
  },  
  menuClose: {
    color: "rgb(185, 185, 185)",
    "&:hover": {
      color: "rgb(255, 255, 255)"
    }
  },
  menuText: {
    marginLeft: theme.spacing.unit * 2
  },
  menuItem: {
    height: 40
  },
  menuItemText: {
    fontSize: 14,
    color: "rgb(185, 185, 185)",
    paddingLeft: "1.5em",
    "&:hover": {
      color: "rgb(255, 255, 255)"
    }
  },
  menuItemHighlight: {
    backgroundColor: "#00bcd4",
    width: "85%",
    marginLeft: theme.spacing.unit * 2,
    border: "1px solid #00838f",
    borderRadius: 8,
    "&:hover": {
      backgroundColor: "#00bcd4"
    }
  },
  menuItemTextHighlight: {
    color: "white",
    fontWeight: "bold"
  },
  icon: {
    fontSize: 16
  }
})
