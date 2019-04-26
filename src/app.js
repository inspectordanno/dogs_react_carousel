import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
import DogApp from './components/DogApp';
import { createStore, applyMiddleware } from 'redux';

// const store = configureStore();
// const state = store.getState();

// ReactDOM.render(<DogApp />, document.getElementById('app'));
import createSagaMiddleware from 'redux-saga';
import createRootSaga from './createRootSaga';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';

import createRootReducer from './createRootReducer';
import { reduxPromiseListener } from './reduxPromiseListener';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      reduxPromiseListener.middleware
    )
  )
);

sagaMiddleware.run(createRootSaga());

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <DogApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
