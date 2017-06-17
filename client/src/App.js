import React, { Component } from 'react';
import qs from 'qs';

import './App.scss';
import TopNav from './components/topnav';
import SearchSummary from './components/search-summary';
import SearchControls from './components/search-controls';
import SearchResults from './components/search-results';

const nextMonday = () => {
  const d = new Date();
  const daysTillNextMonday = 1 + (7 - d.getDay()) % 7;
  d.setDate(d.getDate() + daysTillNextMonday);
  return d;
};

const formatDate = date => date.toISOString().slice(0, 10);

const searchParams = () => {
  const d = nextMonday();
  const d2 = new Date(d);
  d2.setDate(d.getDate() + 1);

  return {
    'adults': 2,
    'class': 'economy',
    'fromPlace': 'EDI-sky',
    'toPlace': 'LOND-sky',
    'fromDate': formatDate(d),
    'toDate': formatDate(d2)
  };
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: {},
      itineraries: [],
    }
  }

  componentDidMount() {
    const search = searchParams();
    this.setState({search: search});

    const q = qs.stringify(search);
    fetch('http://localhost:4000/api/search?' + q)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({itineraries: results});
    })
    .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <TopNav/>
        <SearchSummary search={this.state.search} />
        <SearchControls />
        <SearchResults itineraries={this.state.itineraries} />
      </div>
    );
  }
}

export default App;
