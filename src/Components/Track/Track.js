import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
  constructor(props) {
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction(){
    if(isRemoval === false){
      return  <a className="Track-action" onClick={this.addTrack(this.this.props.track)}>+</a>
    } else {
      return  <a className="Track-action" onClick={this.removeTrack(this.this.props.track)}>-</a>
    }
  }
  render() {
    let addOn = this.props.addOn;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {renderAction}
      </div>

    );
  }
}

export default Track;
