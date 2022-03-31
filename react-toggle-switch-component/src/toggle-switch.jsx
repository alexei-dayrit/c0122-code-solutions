import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isToggledOn: false
    });
    // this.handleSwitchOn = this.handleSwitchOn.bind(this);
    // this.handleSwitchOff = this.handleSwitchOff.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({
      isToggledOn: !this.state.isToggledOn
    });
  }

  // handleSwitchOn() {
  //   this.setState({
  //     isToggledOn: false
  //   });
  // }

  // handleSwitchOff() {
  //   this.setState({
  //     isToggledOn: true
  //   });
  // }

  render() {
    const isToggledOn = this.state.isToggledOn;
    if (!isToggledOn) {
      return (
          <div className="container">
            <div onClick={this.handleSwitch} className="switch-off">
              <div onClick={this.handleSwitch} className="slider-off"></div>
              <div className="label-off">OFF</div>
            </div>
          </div>
      );
    } else {
      return (
      <div className="lights-on">
        <div className="container lights-on">
          <div onClick={this.handleSwitch} className="switch-on">
            <div onClick={this.handleSwitch} className="slider-on"></div>
            <div className="label-on">ON</div>
          </div>
        </div>
      </div>
      );
    }
  }
}
