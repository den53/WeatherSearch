import React, { Component } from 'react';
// import components
import SearchBar from '../containers/search-bar';

// Root node rendering my app
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
