import React, { Component } from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList'


class SearchResults extends Component {
  render() {
    let onAdd = this.props.onAdd;
    let tracks = this.props.tracks;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={tracks} isRemoval={false} />
      </div>

    );
  }
}

export default SearchResults;
