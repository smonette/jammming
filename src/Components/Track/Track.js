import React, { Component } from 'react';
import TextTruncate from 'react-text-truncate';
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
          <img className="TrackArt" src={track.albumArt} />
          <div>
            <h3>
              <TextTruncate
                line={2}
                truncateText="…"
                text={track.name}
              />
            </h3>
            <p>{track.artists}</p>
            <p>{track.album}</p>
          </div>
        </div>
        {this.renderAction(isRemoval)}
      </div>

    );
  }
}

export default Track;
