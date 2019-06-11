import React from "react";
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  Grid,
  Paper,
  Typography,
  Divider,
  RadioGroup,
  FormGroup
} from "@material-ui/core";
import { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { CheckCircle, RadioButtonUnchecked, Favorite, FavoriteBorder } from "@material-ui/icons";

import { Radio, Checkbox } from "../src/components";

const styles = (theme: Theme) =>
  createStyles({
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
    },
    controlsContainer: {
      display: "flex",
      justifyContent: "space-between"
    }
  });

interface PContent extends WithStyles<typeof styles> {}

interface SContent {
  radioValue: string;
}

class Content extends React.Component<PContent, SContent> {
  constructor(props: PContent) {
    super(props);
    this.state = {
      radioValue: "default",
    };
  }

  handleChangeRadio: RadioGroupProps["onChange"] = (_, value) => {
    this.setState({ radioValue: value });
  };

  render = () => {
    const { classes } = this.props;
    const { radioValue } = this.state;
    return (
      <Grid container direction="column" alignItems="center">
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.title}>
            Radio buttons
          </Typography>
          <RadioGroup row value={radioValue} onChange={this.handleChangeRadio} className={classes.controlsContainer}>
            <Radio value="default" color="default" label="DEFAULT" />
            <Radio value="primary" color="primary" label="PRIMARY" />
            <Radio value="secondary" color="secondary" label="SECONDARY" />
            <Radio value="success" color="success" label="SUCCESS" />
            <Radio value="warning" color="warning" label="WARNING" />
            <Radio value="danger" color="danger" label="DANGER" />
          </RadioGroup>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>
            Customed radio buttons
          </Typography>
          <RadioGroup row value={radioValue} onChange={this.handleChangeRadio} className={classes.controlsContainer}>
            <Radio
              value="default"
              color="default"
              label="DEFAULT"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
            <Radio
              value="primary"
              color="primary"
              label="PRIMARY"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
            <Radio
              value="secondary"
              color="secondary"
              label="SECONDARY"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
            <Radio
              value="success"
              color="success"
              label="SUCCESS"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
            <Radio
              value="warning"
              color="warning"
              label="WARNING"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
            <Radio
              value="danger"
              color="danger"
              label="DANGER"
              icon={<RadioButtonUnchecked />}
              checkedIcon={<CheckCircle />}
            />
          </RadioGroup>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>
            Checkboxes
          </Typography>
          <FormGroup row className={classes.controlsContainer}>
            <Checkbox value="default" color="default" label="DEFAULT" />
            <Checkbox value="primary" color="primary" label="PRIMARY" />
            <Checkbox value="secondary" color="secondary" label="SECONDARY" />
            <Checkbox value="success" color="success" label="SUCCESS" />
            <Checkbox value="warning" color="warning" label="WARNING" />
            <Checkbox value="danger" color="danger" label="DANGER" />
          </FormGroup>
          <Divider className={classes.divider} />
          <Typography variant="h5" className={classes.title}>
            Custom checkboxes
          </Typography>
          <FormGroup row className={classes.controlsContainer}>
            <Checkbox
              value="default"
              color="default"
              label="DEFAULT"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              value="primary"
              color="primary"
              label="PRIMARY"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              value="secondary"
              color="secondary"
              label="SECONDARY"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              value="success"
              color="success"
              label="SUCCESS"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              value="warning"
              color="warning"
              label="WARNING"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
            <Checkbox
              value="danger"
              color="danger"
              label="DANGER"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </FormGroup>
          <Divider className={classes.divider} />
        </Paper>
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
