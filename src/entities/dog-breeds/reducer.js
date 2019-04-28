import { combineReducers } from './node_modules/redux';
import { handleActions, combineActions } from './node_modules/redux-actions';

import {
  successGetDogBreedPictures,
  failGetDogBreedPictures,
  requestGetDogBreedTypes,
  successGetDogBreedTypes,
  failGetDogBreedTypes,
} from './actions';

const initialState = () => {
  return {
    dogBreedPictures: [],
    dogBreedTypes: [],
  };
};

const dogBreedPictures = handleActions(
  {
    [successGetDogBreedPictures]: (state, { payload }) => {
      console.log('successGetDogBreedPictures state: ', state)
      console.log('payload: ', payload)
      return {};
    },
    [failGetDogBreedPictures]: (state, { payload }) => {
      console.log('failGetDogBreedPictures state: ', state)
      console.log('payload: ', payload)
      return {};
    },
  },
  initialState()
);

// const dogBreedTypes = handleActions(
//   {
//     [requestGetDogBreedTypes]: ,
//     [successGetDogBreedTypes]: ,
//     [failGetDogBreedTypes]: ,
//   },
//   initialState
// );

const reducer = combineReducers({
  dogBreedPictures,
});

export default reducer;
