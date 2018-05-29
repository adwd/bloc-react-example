import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import { Product, products } from 'cart-bloc';

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
  addItem: (item: { product: Product, count: number }) => void;
}

class Items extends React.Component<Props> {
  addToCart = (p: Product) => () => {
    console.log(p);
    this.props.addItem({ product: p, count: 1 });
  };

  render() {
    const { classes, addItem } = this.props;
    return (
      <div className={classes.root}>
        <Grid container={true} spacing={0} className={classes.root}>
          {products.map((item) => (
            <Grid key={item.name} item={true} xs={6}>
              <Paper
                className={classes.paper}
                square={true}
                elevation={0}
                style={{ backgroundColor: item.color }}
                onClick={this.addToCart(item)}
              >
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Items);
