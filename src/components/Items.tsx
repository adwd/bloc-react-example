import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '100%',
    width: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

interface Props {
  classes: any;
}

const items = [
  'Sweater',
  'Socks',
  'Shawl',
  'Jacket',
  'Hat',
  'Hoodie',
];

class Items extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.root}>
          {items.map(name => (
            <Grid key={name} item={true} xs={6}>
              <Paper className={classes.paper}>{name}</Paper>
              {/*<div style={{ width: '100%'}}>foo</div>*/}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Items);
