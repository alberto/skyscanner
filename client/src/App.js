import React, { Component } from 'react';

import './App.scss';
import TopNav from './components/topnav';
import SearchSummary from './components/search-summary';
import SearchControls from './components/search-controls';
import SearchResults from './components/search-results';
import { search as searchFlights, createSession, pollSession } from './api';

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

function throttle(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: {},
      itineraries: [],
    }
    this.pollSearch = this.pollSearch.bind(this);
  }

  pollSearch(sessionKey) {
    pollSession({sessionKey})
      .then(result => {
        this.setState(result);
        if (result.status === "UpdatesComplete") {
          return result;
        }
        return throttle(1000).then(() => {
          return this.pollSearch(sessionKey);
        });
      });
  }

  componentDidMount() {
    const search = searchParams();
    this.setState({search: search});

    // Client polling. Replace with the comment below to poll on the server
    createSession(search)
    .then(response => {
      this.pollSearch(response.sessionKey);
    })

    // searchFlights(search)
    // .then(({itineraries}) => {
    //   this.setState({itineraries});
    // })
    // .catch(console.error);
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
