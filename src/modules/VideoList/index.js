import React from 'react';
import HoverVideo from './../../components/HoverVideo';
import './style.scss';

const VideoList = (props) => {
  const {
    title,
    sources,
    videoJsOptions
  } = props
  const DEFAULT_OPTIONS = {
    autoplay: true,
    controls: false,
    showMuteBtn: true,
    muted: true,
  }
  /*
  TODO: merge key
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
    <div className="my-list">
      <div className="row">
        <div className="col-12" >
          {title}
        </div>
      </div>
      <div className="row">
        {sources.map(videoInfo =>
          <div className="col-6 col-lg-3 video-listing-item" key={videoInfo.id}>
            <HoverVideo videoJsOptions={Object.assign(videoJsOptions || {}, DEFAULT_OPTIONS)} videoInfo={videoInfo}/>
          </div>
        )}
      </div>
    </div>
  )
}
export default VideoList