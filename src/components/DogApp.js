import React from 'react';
import { dogs, dogList } from './api';
import Carousel from './Carousel';
import Select from 'react-select';

export default class DogApp extends React.Component {

  state = {
    pictures: [],
    breed: 'hound',
    dogBreeds: '',
    selectedOption: null,
  };

  handleBreed(breed) {
    this.setState(() => ({
      breed
    }));
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

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
    this.handleDogList();
  }

  render() {
    if (!this.state.pictures.length) {
      return null;
    }
    // console.log('this.state.dogBreeds: ', this.state.dogBreeds)
    // const enrichedDogBreeds = Object.entries(this.state.dogBreeds).map(dogBreed => {
    //   console.log('dogBreed: ', dogBreed)
    //   // console.log('this.state.dogBreeds[dogBreed]: ', this.state.dogBreeds[dogBreed])
    //   if (!this.state.dogBreeds[dogBreed] || this.state.dogBreeds[dogBreed].length == 0) {
    //     return {'label': dogBreed, 'value': dogBreed};
    //   }

    //   // const fuck = Object.values(dogBreed).map(type => {
    //   //   return `${dogBreed} ${type}`
    //   // });

    //   // console.log('fuck: ', fuck)

    //   // return fuck;
    // });
    // console.log('enrichedDogBreeds::: ', enrichedDogBreeds)
    const enrichedDogBreeds = this.state.dogBreeds.map(dogBreed => {
      return {'label': dogBreed, 'value': dogBreed};
    });

    return (
      <div>
        {
          !!enrichedDogBreeds && enrichedDogBreeds.length > 0
            ? <Select
                value={this.selectedOption}
                onChange={this.handleChange}
                options={enrichedDogBreeds}
              />
            : null
        }
        {this.createIMGs()}
      </div>
    )
  }
}