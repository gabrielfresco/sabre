import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import PlayersGrid from './PlayersGrid'
import PlayerItem from './PlayerItem'
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducer, applyMiddleware(thunk));

describe('<PlayersGrid/>', () => {
    const initialState = {
        players: [{
            "contractUntil": "2022-06-30",
            "dateOfBirth": "1993-05-13",
            "jerseyNumber": 9,
            "name": "Romelu Lukaku",
            "nationality": "Belgium",
            "position": "Centre-Forward"
        }, {
            "contractUntil": "2019-06-30",
            "dateOfBirth": "1990-11-07",
            "jerseyNumber": 1,
            "name": "David de Gea",
            "nationality": "Spain",
            "position": "Keeper"
        }, {
            "contractUntil": "2021-06-30",
            "dateOfBirth": "1987-02-22",
            "jerseyNumber": 20,
            "name": "Sergio Romero",
            "nationality": "Argentina",
            "position": "Keeper"
        }], 
        filters: {}
    };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><PlayersGrid /></Provider>)
    })

    it('renders three <PlayerItem/> component', () => {
        expect(wrapper.find(PlayerItem)).to.have.length(3);
    });
});