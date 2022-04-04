import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel, { images } from './carousel';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Carousel images={images}/>
);
