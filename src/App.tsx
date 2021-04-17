import * as React from 'react';
import './App.css';
import UnityExplorer from './unity-explorer/UnityExplorer'
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UnityExplorer/>
        <p className="App-intro">
          To get started, et <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
