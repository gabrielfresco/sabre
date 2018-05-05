import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PlayersGrid from './players/components/PlayersGrid'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  reducer  from './players/reducer'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PlayersGrid />
      </Provider>
    );
  }
}

export default App;
