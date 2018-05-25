import React from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import blue from '@material-ui/core/colors/blue';
import Items from './components/Items';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

interface State {
  showCart: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showCart: false,
    };
  }

  toggle = () => this.setState({ showCart: !this.state.showCart });

  public render() {
    const { showCart } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar onToggle={this.toggle} inCart={showCart} />
        {showCart ? <div>cart</div> : <Items />}
      </MuiThemeProvider>
    );
  }
}

export default App;
