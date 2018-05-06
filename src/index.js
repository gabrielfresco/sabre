import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './players/reducer';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

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


ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
