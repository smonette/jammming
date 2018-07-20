import React, { Component } from 'react';
import './TrackList.css';

import Track from './Track'

class TrackList extends Component {
  render() {
    let tracks = this.props.searchResults;
    let addOn = this.props.addOn;
    let onRemove = this.props.onRemove
    
    return (
      <div className="TrackList">
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id}></Track>
          })
      </div>

    );
  }
}

export default TrackList;
