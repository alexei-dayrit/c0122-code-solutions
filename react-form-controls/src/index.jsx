import React from 'react';
import ReactDOM from 'react-dom/client';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: 'Type in email'
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log('test');
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type='email' placeholder={this.state.email} onChange={this.handleChange}/>
        </label>
          <input type='submit' value='Sign Up'/>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <NewsletterForm />
);
