import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
  renderAction(isRemoval){
    if(isRemoval === false){
      return  <a className="Track-action" onClick={() => this.props.onAdd(this.props.track)}>+</a>
    } else {
      return  <a className="Track-action" onClick={() => this.props.onRemove(this.props.track)}>-</a>
    }
  }
  render() {
    let onAdd = this.props.onAdd;
    let isRemoval = this.props.isRemoval;
    let track = this.props.track;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        {this.renderAction(isRemoval)}
      </div>

    );
  }
}

export default Track;
