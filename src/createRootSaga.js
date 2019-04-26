import { all } from 'redux-saga/effects';
import { sagas as entitiesSagas } from './entities';

function createRootSaga() {
  return function* rootSaga() {
    yield all([entitiesSagas()]);
  };
}

export default createRootSaga;
