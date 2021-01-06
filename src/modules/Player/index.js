import React, {useRef} from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import './style.scss'
import {
  useParams
} from "react-router-dom";
import VideoPlayer from '../../components/VideoPlayer/index.js'
import NotFound from './../../NotFound';
const SOURCE = require('./../../source.json')
const Player = (props) => {
  // const {
    // videoId,
    // videoInfo,
    // videoJsOptions,
    // videoPlayer
  // } = props
  let videoId = useParams()?.id;
 
  const videoPlayer = useRef(null);
  const getVideo = (id) => { return SOURCE.find(src => src.id === id)}

  const videoInfo = getVideo(videoId)

  const videoJsOptions = {
    showBackBtn: true,
    showInnerTitle: true,
    showSeekBtns: true,
    // autoplay: true,
    width: "auto",
    height: "auto",
    controls: true,
    textTrackDisplay: false,
    controlBar: {
      volumePanel: {
        inline: false
      },
      remainingTimeDisplay : false,
      pictureInPictureToggle: false,
      subsCapsButton: false,
      audioTrackButton: false,
    },
    // preload: 'none',
    // loop: true,
    // fluid: true,
    fill: true,
    muted: true,
    poster: videoInfo?.poster,
    functions: {
      // onFocus: this.focusVideoPlayer,
      // onBlur: this.blurVideoPlayer,
      // onMouseLeave: this.blurVideoPlayer,
      // onMouseEnter: this.focusVideoPlayer,
    }
  }
  
  return (
    <>
      {
        videoInfo ? 
          <div className="App">
            <div className="player-wrapper">
              <div className="player-banner">
              <VideoPlayer
                ref={videoPlayer}
                style={{"height":"100vh"}}
                  {...{
                    videoJsOptions:videoJsOptions,
                    videoInfo: videoInfo
                  }}
                />
              </div>
            </div>
          </div>
        : <NotFound/>
      }
    </>
  )
}

export default Player