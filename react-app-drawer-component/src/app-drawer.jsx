import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isToggled: false
    });
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      isToggled: !this.state.isToggled
    });
  }

  render() {
    if (!this.state.isToggled) {
      return (
        <div className="nav">
          <i onClick={this.handleToggle} className='fa-solid fa-bars'></i>
        </div>
      );
    } else {
      return (
        <div className='nav modal-on'>
          <i className='hidden fa-solid fa-bars'></i>
          <h3 onClick={this.handleToggle}>Burger</h3>
          <ul onClick={this.handleToggle}>
            <NavList nav={nav} />
          </ul>
          <div onClick={this.handleToggle} className="overlay"></div>
        </div>
      );
    }
  }
}

function NavText(props) {
  return <li>{props.text}</li>;
}

function NavList(props) {
  const nav = props.nav;
  return (
    <ul>
      {nav.map(navItem =>
        <NavText key={navItem.id}
                text={navItem.text}
        />
      )}
    </ul>
  );
}

const nav = [
  { id: 1, text: 'McDonald\'s' },
  { id: 2, text: 'Burger King' },
  { id: 3, text: 'In-N-Out' }
];
