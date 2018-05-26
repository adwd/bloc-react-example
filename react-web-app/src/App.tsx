import React from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blue from '@material-ui/core/colors/blue';
import Items from './components/Items';
import Cart from './components/Cart';

import { Subscription } from 'rxjs';
import { CartBloc, CartItem } from 'cart-bloc';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

interface State {
  showCart: boolean;
  cartItems: CartItem[];
  count: number;
}

const bloc = new CartBloc();

class App extends React.Component<{}, State> {
  subsucription = new Subscription();
  constructor(props: any) {
    super(props);
    this.state = {
      showCart: false,
      cartItems: [],
      count: 0,
    };

    const sub1 = bloc.items.subscribe(cartItems => this.setState({ cartItems }));
    this.subsucription.add(sub1);

    const sub2 = bloc.count.subscribe(count => this.setState({ count }));
    this.subsucription.add(sub2);
  }

  componentWillUnmount() {
    this.subsucription.unsubscribe();
  }

  toggle = () => this.setState({ showCart: !this.state.showCart });

  public render() {
    const { showCart, cartItems, count } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar onToggle={this.toggle} inCart={showCart} count={count} />
        {showCart ? <Cart cartItems={cartItems} /> : <Items addItem={bloc.addToCart} />}
      </MuiThemeProvider>
    );
  }
}

export default App;
