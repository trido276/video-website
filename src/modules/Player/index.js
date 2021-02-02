import React, {useEffect, useState} from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import './style.scss'
import {
  useParams
} from "react-router-dom";
import VideoPlayer from '../../components/VideoPlayer/index.js'
import NotFound from '../NotFound/index';
import Command from '../../plugins/api';
const Player = (props) => {
  // const {
    // videoId,
    // videoInfo,
    // videoJsOptions,
    // videoPlayer
  // } = props
  let videoId = useParams()?.id;
  const [videoInfo, updateVideoInfo] = useState({})
  const [loading, updateLoading] = useState(true)
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
    poster: videoInfo?.posterHor,
    functions: {
      // onFocus: this.focusVideoPlayer,
      // onBlur: this.blurVideoPlayer,
      // onMouseLeave: this.blurVideoPlayer,
      // onMouseEnter: this.focusVideoPlayer,
    }
  }

  useEffect(() => {
    updateLoading(true)
    Command('videos',{id: videoId}).then(res => {
      updateVideoInfo(res);
    }).catch(err => {
      console.log(err)
    }).finally(()=> {
      updateLoading(false);
    })
  },[videoId])
  
  return (
    <>
      {
        loading ? <h1 className="text-white text-center" >Loading</h1> :
        videoInfo.id ?
          <div className="App">
            <div className="player-wrapper">
              <div className="player-banner">
                <VideoPlayer
                  key={JSON.stringify(videoInfo)}
                  // ref={videoPlayer}
                  style={{"height":"100vh"}}
                  videoJsOptions={videoJsOptions}
                  videoInfo={videoInfo}
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