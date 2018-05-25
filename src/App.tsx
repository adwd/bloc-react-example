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

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MenuAppBar />
        <Items />
      </MuiThemeProvider>
    );
  }
}

export default App;
