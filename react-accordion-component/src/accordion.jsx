import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      tab: null
    });
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(id, event) {
    if (id !== this.state.tab) {
      this.setState({
        tab: id
      });
    } else {
      this.setState({
        tab: null
      });
    }
  }

  render() {
    const topics = this.props.topics;
    return (
      // React fragment
      <>
        {topics.map(topic => {
          return (
            <div className="wrapper" key={topic.id}>
              <h3 onClick={event => this.handleTab(topic.id, event)} className="heading">
                {topic.name}
              </h3>
              {this.state.tab === topic.id && (
                <div className="text">
                  {topic.text}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  }
}

export const languages = [
  {
    id: 1,
    name: 'Hypertext Markup Language',
    text: `Hypertext Markup Language
      is the standard markup language for creating web pages and web applications.
      With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone
      technolicies for the World Wide Web.`
  },
  {
    id: 2,
    name: 'Cascading Style Sheets',
    text: `Cascading Style Sheets (CSS)
      is a style sheet language used for describing the presentation of a document
      written in a markup language like HTML. CSS is a cornerstone technology of
      the World Wide Web, alongside HTML and JavaScript.`
  },
  {
    id: 3,
    name: 'JavaScript',
    text: `JavaScript, often abbreviated as JS, is
      a high -level, interpreted programming language that conforms to the ECMAScript
      specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based
      object -orientation, and first-class functions.`
  }
];
