import React from 'react';
import { dogs } from './api';
import Carousel from './Carousel';
import DropDown from './Dropdown';

export default class DogApp extends React.Component {

  state = {
    pictures: [],
    breed: 'hound'
  };

  handleBreed(breed) {
    this.setState(() => ({
      breed
    }));
  };

  handlePictures() {
    this.setState(() => ({
      pictures: dogs(this.state.breed)
    }));
  };

  render() {
    return (
      <Carousel pictures={this.state.pictures} />
      <DropDown />
    );
  }
}