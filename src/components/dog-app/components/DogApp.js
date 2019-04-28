import React from 'react';
import { dogs, dogList } from './api';
import Carousel from './Carousel';
import Select from 'react-select';

const DogApp = ({ breedPictures, breedTypes, selectedOption, handleChange }) => {
  const enrichedDogBreeds = breedPictures.map(dogBreed => {
    return {'label': dogBreed, 'value': dogBreed};
  });
  return (
    <div>
      {
        !!enrichedDogBreeds && enrichedDogBreeds.length > 0
          ? <Select
            value={selectedOption}
            onChange={handleChange}
            options={enrichedDogBreeds}
          />
          : null
      }
      {
        breedPictures.map((picture, i) => (
          <img key={i} src={picture} alt="dog"/>
        ))
      }
    </div>
  )
};

export default DogApp;
