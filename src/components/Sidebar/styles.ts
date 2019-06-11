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
    height: 60,
    borderBottom: "0.2mm solid rgb(205, 205, 205)"
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(235, 235, 235)",
    textAlign: "center",
    textOverflow: "clip",
    whiteSpace: "nowrap"
  },
  brandMini: {
    fontSize: 24,
    color: "rgb(235, 235, 235)"
  },
  menuRoot: {
    padding: 0
  },
  menu: {
    fontSize: 18,
    height: 55
  },
  popperMenu: {
    backgroundColor: "#424242",
    width: 260,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  menuOpen: {
    color: "white"
  },  
  menuClose: {
    color: "rgb(185, 185, 185)"
  },
  menuText: {
    marginLeft: theme.spacing(2)
  },
  menuItem: {
    height: 40,
    width: "85%",
    borderRadius: 8,
    marginLeft: theme.spacing(1.5),
    "&:hover": {
      backgroundColor: "#424242"
    }
  },
  menuItemText: {
    fontSize: 16,
    color: "rgb(185, 185, 185)",
    paddingLeft: "1.5em",
    "&:hover": {
      color: "rgb(255, 255, 255)"
    }
  },
  menuItemHighlight: {
    backgroundColor: "#00bcd4",
    border: "1px solid #00838f",
    "&:hover": {
      backgroundColor: "#00bcd4"
    }
  },
  menuItemTextHighlight: {
    color: "white",
    fontWeight: "bold"
  },
  icon: {
    fontSize: 20
  },
  flex: {
    flex: 1
  }
})
