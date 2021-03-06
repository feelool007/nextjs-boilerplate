import React from "react";
import { withStyles, Snackbar, SnackbarContent, Grid, IconButton } from "@material-ui/core";
import { Clear, ErrorOutlined, InfoOutlined, CheckCircle, Warning } from "@material-ui/icons";
import classNames from "classnames";

import { PNotification, PNotificationIcons } from "./types";
import { notificationStyles } from "./styles";

const icons: PNotificationIcons = {
  success: CheckCircle,
  error: ErrorOutlined,
  warning: Warning,
  info: InfoOutlined,
  default: InfoOutlined
};

class Notification extends React.Component<PNotification> {
  static defaultProps = {
    open: false,
    variant: "default",
    message: ""
  };

  render = () => {
    const { open, variant, message, classes, onClose, ...rest } = this.props;
    const Icon = icons[variant];
    return (
      <Snackbar
        open={open}
        disableWindowBlurListener
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={2500}
        onClose={onClose}
        {...rest}
      >
        <SnackbarContent
          message={
            <Grid container alignItems="center">
              <Icon className={classNames(classes.icon, classes[variant])} />
              {message}
            </Grid>
          }
          action={<Clear onClick={onClose} className={classNames(classes.icon, classes.iconClear, classes[variant])} />}
          className={classNames(classes.content, classes[variant])}
        />
      </Snackbar>
    );
  };
}

export default withStyles(notificationStyles)(Notification);
