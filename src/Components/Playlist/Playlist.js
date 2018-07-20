import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  constructor(props){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(){
    // TODO: what the heck do i do with onNameChange???
    // onNameChange()
  }
  render() {
    const tracks = [];
    const onRemove = this.props.onRemove
    
    return (
      <div className="Playlist">
        <input value="New Playlist" onChange={this.handleNameChange}/>
        <TrackList tracks={tracks} onRemove={onRemove} isRemoval={true} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;
