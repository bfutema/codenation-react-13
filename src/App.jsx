import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

import './App.scss';

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      loading: false,
      filter: '',
		};
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters onKeyUp={this.handleFilter} />
        <Contacts filter={this.state.filter} />
      </React.Fragment>
    )
  }
}

export default App;
