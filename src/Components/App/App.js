import React, { Component } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: [
        {name:'song 1', artist: 'some artist', album: 'album 1', id:1}, 
        {name:'song 2', artist: 'some artist', album: 'album 2', id:2},
        {name:'song 3', artist: 'some artist', album: 'album 3', id:3}, 
        {name:'song 4', artist: 'some artist', album: 'album 4', id:4},
        ],
      playlistName:'stephs playlist',
      playlistTracks: [{name:'song 1', artist: 'some artist', album: 'album', id:1}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      alert('add track')
      return
    }
  }
  removeTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      alert('add track')
      return
    }
  }
  updatePlaylistName(name){
    this.state.playlistName = 'input field value goes here'
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
            <SearchResults onAdd={this.addTrack} tracks={this.state.searchResults}/>
            <Playlist onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

