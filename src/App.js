import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: ['name', 'artist', 'album', 'id']
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Jammming</h1>
        </header>
      </div>
    );
  }
}

export default App;
