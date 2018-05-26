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
    height: '50vw',
    'line-height': '50vw',
    width: '100%',
    color: 'white',
    'font-weight': 'bold',
    'text-align': 'center',
    'vertical-align': 'middle',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

interface Props {
  classes: any;
}

const items = [
  { name: 'Sweater', color: '#536DFE' },
  { name: 'Socks', color: '#FFD500' },
  { name: 'Shawl', color: '#1CE8B5' },
  { name: 'Jacket', color: '#FF6C00' },
  { name: 'Hat', color: '#574DDD' },
  { name: 'Hoodie', color: '#ABD0F2' },
  { name: 'Tuxedo', color: '#8DA0FC' },
  { name: 'Shirt', color: '#1CE8B5' },
];

class Items extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.root}>
          {items.map(({ name, color }) => (
            <Grid key={name} item={true} xs={6}>
              <Paper
                className={classes.paper}
                square={true}
                elevation={0}
                style={{ backgroundColor: color }}
              >
                {name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Items);
