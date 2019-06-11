import React from "react";
import { createStyles, Theme, WithStyles, withStyles, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { Button, IconButton } from "../src/components";

const styles = (theme: Theme) => createStyles({
  root: {
    width: "85%",
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  title: {
    marginBottom: theme.spacing(1.5),
    color: "grey"
  }
})

interface PContent extends WithStyles<typeof styles> {}

class Content extends React.Component<PContent> {
  render = () => {
    const { classes } = this.props;
    return (
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.title}>Normal button</Typography>
          <Grid container justify="space-between">
            <Button variant="contained" color="default">DEFAULT</Button>
            <Button variant="contained" color="primary">PRIMARY</Button>
            <Button variant="contained" color="secondary">SECONDARY</Button>
            <Button variant="contained" color="success">SUCCESS</Button>
            <Button variant="contained" color="warning">WARNING</Button>
            <Button variant="contained" color="danger">DANGER</Button>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>Outlined button</Typography>
          <Grid container justify="space-between">
            <Button variant="outlined" color="default">DEFAULT</Button>
            <Button variant="outlined" color="primary">PRIMARY</Button>
            <Button variant="outlined" color="secondary">SECONDARY</Button>
            <Button variant="outlined" color="success">SUCCESS</Button>
            <Button variant="outlined" color="warning">WARNING</Button>
            <Button variant="outlined" color="danger">DANGER</Button>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>Text button</Typography>
          <Grid container justify="space-between">
            <Button variant="text" color="default">DEFAULT</Button>
            <Button variant="text" color="primary">PRIMARY</Button>
            <Button variant="text" color="secondary">SECONDARY</Button>
            <Button variant="text" color="success">SUCCESS</Button>
            <Button variant="text" color="warning">WARNING</Button>
            <Button variant="text" color="danger">DANGER</Button>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>Icon button</Typography>
          <Grid container justify="space-between">
            <IconButton color="default"><Add /></IconButton>
            <IconButton color="primary"><Add /></IconButton>
            <IconButton color="secondary"><Add /></IconButton>
            <IconButton color="success"><Add /></IconButton>
            <IconButton color="warning"><Add /></IconButton>
            <IconButton color="danger"><Add /></IconButton>
          </Grid>
          <Divider className={classes.divider} />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Content);
