import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  constructor(props){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(event){
    // TODO: what the heck do i do with onNameChange???
    this.props.onNameChange(event)
  }
  render() {
    const tracks = [];
    const onRemove = this.props.onRemove;
    const onSave = this.props.onSave;
    const playlistTracks = this.props.playlistTracks;

    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
        <a className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;
