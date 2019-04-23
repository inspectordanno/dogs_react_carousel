import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './components/api';
import Carousel from './components/Carousel';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <Carousel />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));