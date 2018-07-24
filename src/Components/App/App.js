import React, { Component } from 'react';
import './App.css';

import Playlist from '../Playlist/Playlist.js';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'Playlist Name',
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    // this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }
  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      console.log('add track')
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
     console.log('remove track')
  }
  updatePlaylistName(name){
    this.setState({
        playlistName: name
      }
    )
  }
  // savePlaylist(){
  //   // Generates an array of uri values called trackURIs from the playlistTracks property.
  //   // TODO: What does URI mean??
  //   const trackURI = this.state.playlistTracks.map(savedTrack => {
  //     return savedTrack.uri;
  //   });
  // }
  search(searchTerm){
    Spotify.search(searchTerm).then(
      tracks => this.setState({
        searchResults: tracks || []
      })
    )
  }
  render() {
    let playlistName = this.playlistName
    let playlistTracks = this.playlistTracks
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} tracks={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={Spotify.savePlaylist} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

