import React from 'react';
import Coverflow from 'react-coverflow';
import { dogs } from './api';

const Carousel = (props) => {
  const createImgs = () => {
    this.props.pictures.forEach((picture) => {
      return (
        <img src={picture} alt="dog"/>
      );
    });
  };

  return (
    <Coverflow 
      width="960" 
      height="500"
      infiniteScroll={true}
      displayQuantityOfSide={2}
      navigation={false}
      enableScroll={true}
      clickable={false}
      active={0}
    >
    {createImgs()};
    </Coverflow>
  ); 
};

export default Carousel;