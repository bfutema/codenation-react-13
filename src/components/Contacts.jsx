import React from "react";

import Contact from './Contact';
import Loading from '../components/Loading';

import { filterByName } from '../utils';

import './contacts.scss';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
			loading: false,
		};
	}

	componentDidMount() {
		const that = this;

    this.setState({ loading: true });

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts', { method: 'GET' })
    .then(response => { return response.json(); })
    .then(json => {
      setTimeout(function () {
        const newJson = json.map(contact => {
          const date = new Intl.DateTimeFormat('pt-BR').format(new Date(contact.admissionDate));

          return { ...contact, admissionDate: date }
        });
        that.setState({ contacts: newJson, loading: false });
      }, 1000);
    })
    .catch(err => console.log(err));
	}

	componentDidUpdate() {
		const that = this;
    const filter = this.props.filter;

    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts', { method: 'GET' })
    .then(response => { return response.json(); })
    .then(json => {
      let filteredContacts = filterByName(json, filter);

      that.setState({
        contacts: filteredContacts,
      });
    })
    .catch(err => console.log(err));
	}

	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar"></span>
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{this.state.loading ? <Loading /> : this.state.contacts.map(contact => {
						return <Contact key={contact.id} contact={contact} />;
					})}
				</section>
			</div>
		);
	}
}

export default Contacts;
