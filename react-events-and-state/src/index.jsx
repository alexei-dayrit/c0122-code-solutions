import React from 'react';
import ReactDOM from 'react-dom';

class CustomButtonControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <button onClick={this.handleClick}>Thanks!</button>;
    } else {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

const element = (
  <CustomButtonControl />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
