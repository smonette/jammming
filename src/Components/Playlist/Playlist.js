import React, { Component } from 'react';
import './Playlist.css';

import TrackList from './TrackList'

class Playlist extends Component {

  render() {
    onRemove = this.props.onRemove
    return (
      <div className="Playlist">
        <input value="New Playlist"/>
        <TrackList isRemoval=true />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;
