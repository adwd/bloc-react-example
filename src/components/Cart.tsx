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

const items = [
  { name: 'Sweater', color: '#536DFE' },
  { name: 'Socks', color: '#FFD500' },
];

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
}

class Cart extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <List className={classes.list}>
          {items.map(({ name, color }) => (
            <ListItem
              key={name}
              role={undefined}
              dense={true}
              button={true}
              onClick={console.log}
              style={{ backgroundColor: color }}
            >
              <ListItemText primary={name} className={classes.itemText} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  {/* <CommentIcon /> */}
                  <Avatar>1</Avatar>
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
