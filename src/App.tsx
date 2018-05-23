import React from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
  public render() {
    return (
      <>
        <CssBaseline />
        <MenuAppBar />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </>
    );
  }
}

export default App;
