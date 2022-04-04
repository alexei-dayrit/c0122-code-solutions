import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      password: '',
      isFocused: true
      // isSubmitted: false
    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFocus(event) {
    this.setState({ isFocused: true });
  }

  handleBlur(event) {
    this.setState({ isFocused: false });
  }

  handleSubmit(event) {
    event.preventdefault();
    if (this.state.password.length < 8) {
      // console.log('wrong');
      // eslint-disable-next-line no-useless-return
      return;
    }
  }

  render() {
    const password = this.state.password;
    const isFocused = this.state.isFocused;
    return (
      <div className='container'>
        <div className="row">
          <div className="col-four-fifths">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='password'>Password</label>
              <input onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur}
                    value={this.state.password} id='password' name='password' type='password'>
              </input>
              <input value='Submit' type='submit'></input>
            </form>
          </div>
          <div className='col-one-fifth'>
            {password.length > 8 && (
                <i className="fa-solid fa-check"></i>
            )}
            {!isFocused && password.length < 8 && (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
         <div className='error-msg'>
           {!isFocused && password.length === 0 && (
             <p>A password is required.</p>
           )}
           {!isFocused && password.length > 0 && password.length < 8 && (
             <p>Your password is too short.</p>
           )}
          </div>
      </div>
    );
  }
}
