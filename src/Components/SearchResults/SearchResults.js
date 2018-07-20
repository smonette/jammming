import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from './TrackList'


class SearchResults extends Component {
  render() {
    let SearchResults = this.props.searchResults;
    let addOn = this.props.addOn;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList isRemoval=false />
      </div>

    );
  }
}

export default SearchResults;
