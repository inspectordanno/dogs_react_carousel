import { put } from "redux-saga/effects";

import { requestGetDogPictures } from "./actions";

import {
  requestGetDogBreedPictures,
  successGetDogBreedPictures,
  failGetDogBreedPictures,
  requestGetDogBreedTypes,
  successGetDogBreedTypes,
  failGetDogBreedTypes,
} from './actions';

import { dogs, dogList } from './api';

export function* executeRequestGetDogBreedPictures({
  payload: { breed },
}) {
  try {
    const response = yield call(dogs, breed);

    yield put(successGetDogBreedPictures(response));
  } catch (error) {
    yield put(failGetDogBreedPictures(error));
  }
}

export function* watchRequestGetDogBreedPictures() {
  yield takeEvery(
    requestGetDogPictures.toString(),
    executeRequestGetDogBreedPictures
  );
}

export default function* sagas() {
  try {
    yield all([watchRequestGetDogBreedPictures()]);
  } catch (error) {
    yield put(errorOccurred(error));
  }
}
