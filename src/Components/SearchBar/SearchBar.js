import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  search(term){
    this.props.onSearch(this.state.term);
  }
  handleTermChange(event){
    this.setState({term: event.target.value})
  }
  handleEnter(event){
    if(event.key == 'Enter'){
      this.search()
    }
  }
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} onKeyPress={this.handleEnter}/>
        <a className="SearchButton" onClick={this.search}>SEARCH</a>
      </div>

    );
  }
}

export default SearchBar;
