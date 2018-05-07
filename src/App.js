import React, { Component } from 'react';
import PlayersGrid from './players/components/PlayersGrid'
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PlayersGrid />
      </Provider>
    );
  }
}

export default App;
