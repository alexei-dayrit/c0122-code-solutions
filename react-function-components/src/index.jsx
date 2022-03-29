import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = props => {
  return <button>{props.text}</button>;
};

const element = <CustomButton text="Click Me!"/>;
const rootDiv = document.querySelector('#root');

ReactDOM.render(element, rootDiv);

/* QnA Solution

const CustomButton = props => {
  return (
    <button>Click me!</button>
  );
};

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);

*/
