import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isCounting: false,
      time: 0
    });
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleTimerReset = this.handleTimerReset.bind(this);
    this.startCounting = this.startCounting.bind(this);
    this.stopCounting = this.stopCounting.bind(this);
  }

  // change start counting and stop counting to one method?
  startCounting() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      }
      );
    }, 1000);
  }

  stopCounting() {
    clearInterval(this.intervalID);
  }

  handleTimerReset() {
    if (!this.state.isCounting) {
      clearInterval(this.intervalID);
      this.setState({
        time: 0
      });
    }
  }

  handlePlay() {
    this.setState({
      isCounting: true
    });
    this.startCounting();
  }

  handlePause() {
    this.setState({
      isCounting: false
    });
    this.stopCounting();
  }

  render() {
    const isCounting = this.state.isCounting;
    const time = this.state.time;
    if (!isCounting) {
      return (
        <div className='container'>
          <div onClick={this.handleTimerReset} className='circle timer-text clickable-face'>{time}</div>
          <div><i onClick={this.handlePlay} className='fas fa-play'></i></div>
        </div>
      );
    } else {
      return (
        < div className='container'>
          <div className='circle timer-text non-clickable-face'>{time}</div>
          <div>
            <i onClick={this.handlePause} className='fas fa-pause'></i>
          </div>
        </div>
      );
    }
  }
}
