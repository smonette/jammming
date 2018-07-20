import React, { Component } from 'react';
import './TrackList.css';

import Track from '../Track/Track'

class TrackList extends Component {
  render() {
    let tracks = this.props.searchResults;
    let onAdd = this.props.onAdd;
    let onRemove = this.props.onRemove;
    let isRemoval = this.props.isRemoval;

    return (
      <div className="TrackList">{
          this.props.tracks.map(track => {
            return <Track onRemove={onRemove} onAdd={onAdd} isRemoval={isRemoval} track={track} key={track.id}></Track>
          })
        }
      </div>

    );
  }
}

export default TrackList;
