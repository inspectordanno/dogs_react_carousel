import React from 'react';
import { dogs } from './api';
import Carousel from './Carousel';

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

  componentDidMount() {
    this.handlePictures();
  }

  render() {
    return (
      <Carousel pictures={this.state.pictures} />
    );
  }
}