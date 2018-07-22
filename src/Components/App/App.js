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
      playlistName: 'stephs playlist',
      playlistTracks: [{name:'song 1', artist: 'some artist', album: 'album', id:1},{name:'song 2', artist: 'some artist', album: 'album', id:2}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      alert('add track')
      // TODO: what does the return actually do??
      return
    }
    this.setState({
      playlistTracks: this.state.playlistTracks.concat(track)
    })
  }
  removeTrack(track){
    const newPlaylistTracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id != track.id);
    this.setState({
      playlistTracks: newPlaylistTracks
    })
  }
  updatePlaylistName(name){
    this.setState({
        playlistName: name
      }
    )
  }
  savePlaylist(){
    // Generates an array of uri values called trackURIs from the playlistTracks property.
    // TODO: What does URI mean??
    const trackURI = this.state.playlistTracks.map(savedTrack => {
      return savedTrack.uri;
    });
  }
  search(searchTerm){
    console.log(searchTerm)
  }
  render() {
    let playlistName = this.playlistName
    let playlistTracks = this.playlistTracks
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSave={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} tracks={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

