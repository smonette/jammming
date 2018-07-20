import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  render() {
    const tracks = [];
    const onRemove = this.props.onRemove
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;
