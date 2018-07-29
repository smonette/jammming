import React, { Component } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    this.state = {
      buttonText: 'Save your playlist'
    }
  }
  handleNameChange(event){
    // event.currenttarget.value brings in the input value, not all the event junk
    this.props.onNameChange(event.currentTarget.value)
  }
  handleButtonSubmit(event){
    this.props.onSave()
    this.setState({
      buttonText: 'Playlist saved!'
    });
  }
  render() {
    const tracks = [];
    const onRemove = this.props.onRemove;
    const onSave = this.props.onSave;
    const playlistTracks = this.props.playlistTracks;

    return (
      <div className="Playlist">
        <div className="PlaylistName">
          <i className="fas fa-pencil-alt"></i>
          <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        </div>
        <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />

        {(playlistTracks.length > 0) ? 
          <a className="Playlist-save" onClick={this.handleButtonSubmit}>{this.state.buttonText}</a> 
          : 
          <p>Add songs to get started!</p>
        }

      </div>

    );
  }
}

export default Playlist;
