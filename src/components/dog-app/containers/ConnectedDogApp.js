import React, { Component } from 'react';
import { connect } from 'react-redux';

import DogApp from '../components/DogApp';
import { requestGetDogBreedPictures } from '../../entities/dog-breeds/actions';

class DogApp extends React.Component {
  constructor(props) {
    super(props);
    const breed = 'hound';
    this.props.requestGetDogBreedPictures({ breed });

    // this.handleChange = this.handleChange.bind(this);
    // this.handleBreed = this.handleBreed.bind(this);
  }

  state = {
    // pictures: [],
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

  // async handlePictures() {
  //   const pictures = await dogs(this.state.breed);
    
  //   this.setState(() => ({
  //     pictures
  //   }));
  // };

  // async handleDogList() {
  //   const dogBreeds = await dogList();
  //   this.setState(() => ({
  //     dogBreeds
  //   }));
  // }

  // createIMGs() {
  //   return this.state.pictures.map((picture, i) => (
  //     <img key={i} src={picture} alt="dog"/>
  //   ));
  // };


  componentDidMount() {
    // this.handlePictures();
    // this.handleDogList();
    // this.props.requestGetDogBreedPictures({ breed: this.breed });
  }

  render() {
    // if (!this.state.pictures.length) {
    //   return null;
    // }
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
    // const enrichedDogBreeds = this.state.dogBreeds.map(dogBreed => {
    //   return {'label': dogBreed, 'value': dogBreed};
    // });
    const { breedPictures } = this.props;

    return (
      <DogApp
        breedPictures={breedPictures}
        breedTypes={this.state.dogBreeds}
        handleChange={this.handleChange}
        selectedOption={this.selectedOption}
      />
      {/* <div>
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
      </div> */}
    )
  }
}

const mapStateToProps = state => {
  return {
    breedPictures: getBreedPictures(state),
    // dogBreeds: getBreedTypes(state),
  }
};

const mapDispatchToProps = {
  requestGetDogBreedPictures,
};

const DogAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DogApp);

export default DogAppContainer;
