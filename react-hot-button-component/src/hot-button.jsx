import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clickCounter: 0
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCounter: this.state.clickCounter + 1
    });
  }

  render() {
    const clickCounter = this.state.clickCounter;
    if (clickCounter < 3) {
      return <button className='hot-button' onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCounter < 6) {
      return <button className='hot-button cold' onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCounter < 9) {
      return <button className='hot-button cool' onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCounter < 12) {
      return <button className='hot-button tepid' onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCounter < 15) {
      return <button className='hot-button warm' onClick={this.handleClick}>Hot Button</button>;
    } else if (clickCounter < 18) {
      return <button className='hot-button hot' onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className='hot-button nuclear' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
