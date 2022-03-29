import React from 'react';
import ReactDOM from 'react-dom';

const helloWorld = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(helloWorld, document.querySelector('#root'));
