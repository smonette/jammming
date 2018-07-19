import React, { Component } from 'react';
import './SearchResults.css';


class SearchResults extends Component {
  render() {
    let SearchResults = this.props.searchResults;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <!-- Add a TrackList component -->
      </div>

    );
  }
}

export default SearchResults;
