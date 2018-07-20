import React, { Component } from 'react';
import './App.css';

import Playlist from './Playlist'
import SearchResults from './SearchResults'
import SearchBar from './SearchBar'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: ['name', 'artist', 'album', 'id'],
      playlistName:'steph',
      playlistTracks: [{name:'song 1', artist: 'some artist', album: 'album', id:1}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return
    }
  }
  removeTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return
    }
  }
  updatePlaylistName(name){

  }
  render() {
    let playlistName = this.playlistName
    let playlistTracks = this.playlistTracks
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={addTrack}/>
            <Playlist onRemove={removeTrack} onNameChange={updatePlaylistName/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

