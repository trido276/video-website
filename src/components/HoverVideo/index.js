import React, { Component } from 'react';
import { render } from 'react-dom';
import VideoPlayer from './../VideoPlayer/index.js';
import { Link,
  BrowserRouter as Router,
 } from 'react-router-dom'

import './style.scss';

class HoverVideo extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      videoJsOptions: props.videoJsOptions,
      videoInfo: props.videoInfo
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div className="hover-video-wrapper">
        {
          this.state.isHovering ?
            <div
              className="hover-video-container"
              onMouseLeave={this.handleMouseHover}>
                <VideoPlayer videoJsOptions={this.state.videoJsOptions} videoInfo={this.state.videoInfo} />
                <div className="card row hover-video-actions">
                <div className="card-body col row">
                  <Link className="col" to={`/player/${this.state?.videoInfo?.id}`}>
                    <div className="action-item icon-place-holder play">
                    </div>
                  </Link>
                  <Link className="col" to={`/player/${this.state?.videoInfo?.id}`}>
                    <div className="action-item icon-place-holder add">
                    </div>
                  </Link>
                  <Link className="col" to={`/player/${this.state?.videoInfo?.id}`}>
                    <div className="action-item icon-place-holder like">
                    </div>
                  </Link>
                  <Link className="col" to={`/player/${this.state?.videoInfo?.id}`}>
                    <div className="action-item icon-place-holder dislike">
                    </div>
                  </Link>
                  <div className="col action-item">
                  </div>
                  <Link className="col" to={`/player/${this.state?.videoInfo?.id}`}>
                    <div className="action-item icon-place-holder information">
                    </div>
                  </Link>
                  <div className="col-12">{this.state.videoInfo?.title}</div>
                </div>
              </div>
            </div>
          : <></>
        }
        <div className="hover-video" onMouseEnter={this.handleMouseHover}>
          <Router>
            <Link to={`/player/${this.state?.videoInfo?.id}`}>
              <img src={this.state.videoInfo?.poster} />
            </Link>
          </Router>
        </div>
      </div>
    );
  }
}

render(<HoverVideo />, document.getElementById('root'));

export default HoverVideo