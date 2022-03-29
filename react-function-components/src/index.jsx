import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = props => {
  return <button>{props.text}</button>;
};

const element = <CustomButton text="Click Me!"/>;
const rootDiv = document.querySelector('#root');

ReactDOM.render(element, rootDiv);
