import React, { useEffect, useState } from 'react';
import HoverVideo from './../../components/HoverVideo';
import './style.scss';

const DEFAULT_OPTIONS = {
  autoplay: true,
  controls: false,
  showMuteBtn: true,
  muted: true,
}
const VideoList = (props) => {
  const [state, updateState] = useState({});
  useEffect(() => {
    updateState({...props});
  },[JSON.stringify(props)])
  /*
    +source
      - poster
      - src
      - trailer
      - title
      - desc
      - logo
      -...
    +videoContent
      - config
      - src
  */
  return (
    <div className="video-listing">
      <div className="row">
        <div className="col-12" >
          {state.title}
        </div>
      </div>
      <div className="row">
        {state.sources?.map((videoInfo, index) =>
          <div className="col-6 col-lg-3 video-listing-item" >
            <HoverVideo
              key={`${videoInfo.id}-${index}`}
              videoJsOptions={{...state.videoJsOptions, ...DEFAULT_OPTIONS}}
              videoInfo={videoInfo}/>
          </div>
        )}
      </div>
    </div>
  )
}
export default VideoList