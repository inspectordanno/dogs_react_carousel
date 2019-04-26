import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import entities from './entities';

const createRootReducer = history =>
  combineReducers({ router: connectRouter(history), entities });

export default createRootReducer;
