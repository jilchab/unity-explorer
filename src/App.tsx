import * as React from 'react';
import UnityExplorer from './unity-explorer/UnityExplorer'


class App extends React.Component {
  public render() {
    return (
      <div style={{margin:"10px"}}>
        <UnityExplorer/>
      </div>
    );
  }
}

export default App;
