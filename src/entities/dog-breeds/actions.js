import { createAction } from './node_modules/redux-actions';

/**
 * GET DOG BREED PICTURES
 */
export const requestGetDogPictures = createAction(
  `${TYPE}/${REQUEST_GET_DOG_BREED_PICTURES}`
);

export const successGetDogPictures = createAction(
  `${TYPE}/${SUCCESS_GET_DOG_BREED_PICTURES}`
);

export const failGetDogPictures = createAction(
  `${TYPE}/${FAIL_GET_DOG_BREED_PICTURES}`
);

/**
 * GET DOG BREED TYPES
 */
export const requestGetDogBreedTypes = createAction(
  `${TYPE}/${REQUEST_GET_DOG_BREED_TYPES}`
);

export const successGetDogBreedTypes = createAction(
  `${TYPE}/${SUCCESS_GET_DOG_BREED_TYPES}`
);

export const failGetDogBreedTypes = createAction(
  `${TYPE}/${FAIL_GET_DOG_BREED_TYPES}`
);
