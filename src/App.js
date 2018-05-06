import React, { Component } from 'react';
import './App.css';
import PlayersGrid from './players/components/PlayersGrid'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './players/reducer';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const fetchPlayers = () => {
  return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
}

const renderPlayers = () => {
  return (dispatch) => {
    return fetchPlayers().then(res => {
      return res.json();
    }).then(data => {
      dispatch({ type: "RENDERPLAYERS", data: data });
    });
  };
}

store.dispatch(renderPlayers())

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
