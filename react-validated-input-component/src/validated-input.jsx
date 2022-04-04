import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      password: '',
      passwordLength: 8,
      isFocused: false
      // isSubmitted: false
    });
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
    this.setState({ passwordLength: event.target.value.length });
  }

  handleFocus(event) {
    this.setState({ isFocused: true });
  }

  render() {
    const password = this.state.password;
    const passwordLength = this.state.passwordLength;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='password'>Password</label>
          <input onChange={this.handleChange} onFocus={this.handleFocus} value={this.state.password} id='password'
                name='password' type='password'>
          </input>
          {passwordLength < 8 && (
            <i className="fa-solid fa-xmark"></i>
          )}
          {passwordLength > 8 && (
            <i className="fa-solid fa-check"></i>
          )}
          <input type='submit' name='submit' value='Submit'></input>
        </form>
      </div>
    );
  }
}
