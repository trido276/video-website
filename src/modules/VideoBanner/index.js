import React, {useRef} from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import './style.scss'
import VideoPlayer from '../../components/VideoPlayer/index.js'
const VideoBanner = (props) => {
  const {
    videoInfo,
  } = props
  const videoPlayer = useRef(null);

  const videoJsOptions = {
    // autoplay: true,
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
    poster: videoInfo?.posterBig,
  }
  
  return (
    <VideoPlayer
      ref={videoPlayer}
      videoJsOptions={videoJsOptions}
      videoInfo={videoInfo}
    />
  )
}

export default VideoBanner