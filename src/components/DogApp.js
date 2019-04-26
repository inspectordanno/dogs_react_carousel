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

  async handlePictures() {
    const pictures = await dogs(this.state.breed);
    this.setState(() => ({
      pictures
    }));
  };

  async handleDogList() {
    const dogBreeds = await dogList();
    this.setState(() => ({
      dogBreeds
    }));
  }

  createIMGs() {
    return this.state.pictures.map((picture, i) => (
      <img key={i} src={picture} alt="dog"/>
    ));
  };


  componentDidMount() {
    this.handlePictures();
  }

  render() {
    if (!this.state.pictures.length) {
      return null;
    }

    return (
      <div>
        // <Select options={this.state.pictures}
        {this.createIMGs()}
      </div>
    )
  }
}