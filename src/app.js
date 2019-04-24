import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import DogApp from './components/DogApp';

// const store = configureStore();
// const state = store.getState();

ReactDOM.render(<DogApp />, document.getElementById('app'));