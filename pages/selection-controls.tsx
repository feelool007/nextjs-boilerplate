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
  RadioGroup
} from "@material-ui/core";
import { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { CheckCircle, RadioButtonUnchecked } from "@material-ui/icons";

import { Radio } from "../src/components";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "85%",
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.down("md")]: {
        width: "100%"
      }
    },
    divider: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2
    },
    title: {
      marginBottom: theme.spacing.unit * 1.5,
      color: "grey"
    },
    radioContainer: {
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
      radioValue: "default"
    };
  }

  handleChange: RadioGroupProps["onChange"] = (_, value) => {
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
          <RadioGroup row value={radioValue} onChange={this.handleChange} className={classes.radioContainer}>
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
          <RadioGroup row value={radioValue} onChange={this.handleChange} className={classes.radioContainer}>
            <Radio value="default" color="default" label="DEFAULT" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} />
            <Radio value="primary" color="primary" label="PRIMARY" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />}/>
            <Radio value="secondary" color="secondary" label="SECONDARY" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} />
            <Radio value="success" color="success" label="SUCCESS" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} />
            <Radio value="warning" color="warning" label="WARNING" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} />
            <Radio value="danger" color="danger" label="DANGER" icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} />
          </RadioGroup>
          <Divider className={classes.divider} />
        </Paper>
      </Grid>
    );
  };
}

export default withStyles(styles)(Content);
