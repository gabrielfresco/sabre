import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import PlayersGrid from './players/components/PlayersGrid'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './players/reducer';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducer, applyMiddleware(thunk));

describe('<App/>', () => {
  it('renders one <PlayersGrid/> component', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find(PlayersGrid)).to.have.length(1);
  });
  it('renders one <Provider/> component', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find(Provider)).to.have.length(1);
  });
});