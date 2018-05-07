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
        }).catch(err => {
            dispatch({ type: "FETCH_ERROR", error: err });
        });
    };
}

store.dispatch(renderPlayers())

ReactDOM.render(<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
    , document.getElementsByTagName('head')[0]);
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
