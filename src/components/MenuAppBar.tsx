import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

interface Props {
  classes: any;
  inCart: boolean;
  onToggle: () => void;
}

class MenuAppBar extends React.Component<Props> {
  render() {
    const { classes, inCart, onToggle } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {inCart ? (
              <IconButton
                className={classes.menuButton}
                onClick={onToggle}
                color="inherit"
                aria-label="Menu"
              >
                <ChevronLeft />
              </IconButton>
            ) : null}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Bloc
            </Typography>
            <div>
              {!inCart ? (
                <IconButton
                  aria-haspopup="true"
                  onClick={onToggle}
                  color="inherit"
                >
                  <ShoppingCart />
                </IconButton>
              ) : null}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MenuAppBar);
