import React from 'react';

import './contact.scss';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {},
    };
  }

  componentDidMount() {
    this.setState({
      contact: {
        ...this.props.contact,
      },
    });
  }

  render() {
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={this.state.contact.avatar} alt={`Imagem de ${this.state.contact.name}`}/>
        </span>
        <span className="contact__data">{ this.state.contact.name }</span>
        <span className="contact__data">{ this.state.contact.phone }</span>
        <span className="contact__data">{ this.state.contact.country }</span>
        <span className="contact__data">{ this.state.contact.admissionDate }</span>
        <span className="contact__data">{ this.state.contact.company }</span>
        <span className="contact__data">{ this.state.contact.department }</span>
      </article>
    );
  }
}

export default Contact;
