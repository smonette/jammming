import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  removeTrack(track) {
    this.props.onRemove(this.props.track)
  }
  addTrack(track) {
    this.props.onAdd(this.props.track)
  }
  renderAction(isRemoval){
    if(isRemoval === false){
      return  <a className="Track-action" onClick={this.addTrack}>+</a>
    } else {
      return  <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
  }
  render() {
    let isRemoval = this.props.isRemoval;
    let track = this.props.track;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artists} | {track.album}</p>
        </div>
        {this.renderAction(isRemoval)}
      </div>

    );
  }
}

export default Track;
