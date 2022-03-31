import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isToggledOn: false
    });
    this.handleSwitchOn = this.handleSwitchOn.bind(this);
    this.handleSwitchOff = this.handleSwitchOff.bind(this);
  }

  handleSwitchOn() {
    this.setState({
      isToggledOn: false
    });
  }

  handleSwitchOff() {
    this.setState({
      isToggledOn: true
    });
  }

  render() {
    const isToggledOn = this.state.isToggledOn;
    if (!isToggledOn) {
      return (
          <div className="container">
            <div onClick={this.handleSwitchOff} className="switch-off">
              <div onClick={this.handleSwitchOff} className="slider-off"></div>
              <div onClick={this.handleSwitchOff} className="label-off">OFF</div>
            </div>
          </div>
      );
    } else if (isToggledOn) {
      return (
      <div className="container">
        <div onClick={this.handleSwitchOn} className="switch-on">
          <div onClick={this.handleSwitchOn} className="slider-on"></div>
          <div onClick={this.handleSwitchOn} className="label-on">ON</div>
        </div>
      </div>
      );
    }
  }
}
