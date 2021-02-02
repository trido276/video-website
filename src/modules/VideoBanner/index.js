import React, {useEffect, useState} from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import './style.scss'
import VideoPlayer from '../../components/VideoPlayer/index.js'

const DEFAULT_OPTIONS = {
  // autoplay: false,
  delayPlay: 5000,
  showSubBanner: true,
  showMuteBtn: true,
  width: "auto",
  height: "auto",
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
  preload: 'none',
  loop: true,
  fluid: true,
  fill: true,
  muted: true,
}

const VideoBanner = (props) => {
  const [state, updateState] = useState({
    videoInfo: {},
    videoJsOptions: {}
  });

  useEffect(() => {
    updateState({
      videoInfo: {
        ...props.videoInfo,
        ...state.videoInfo
      },
      videoJsOptions: {
        ...DEFAULT_OPTIONS,
        poster: props.videoInfo.poster || undefined
      }
    });
  },[JSON.stringify(props)])
  
  return (
    <div>
    <VideoPlayer
      key={JSON.stringify(state)}
      videoJsOptions={{...DEFAULT_OPTIONS, ...state.videoJsOptions}}
      videoInfo={state.videoInfo}
      />
      </div>
  )
}

export default VideoBanner