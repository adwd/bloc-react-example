import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  withStyles,
} from '@material-ui/core';

import { CartItem } from 'cart-bloc';

const styles = {
  list: {
    padding: 0,
  },
  itemText: {
    padding: '10px',
    color: 'white',
  },
};

interface Props {
  classes: any;
  cartItems: CartItem[];
}

class Cart extends React.Component<Props> {
  render() {
    const { classes, cartItems } = this.props;
    return (
      <>
        <List className={classes.list}>
          {cartItems.map((item) => (
            <ListItem
              key={item.product.id}
              role={undefined}
              dense={true}
              button={true}
              style={{ backgroundColor: item.product.color }}
            >
              <ListItemText primary={item.product.name} className={classes.itemText} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <Avatar>{item.count}</Avatar>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </>
    );
  }
}

export default withStyles(styles)(Cart);
