import React from 'react';
import HoverVideo from './../../components/HoverVideo';
import './style.scss';

const VideoList = (props) => {
  const {
    title,
    sources
  } = props

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    showMuteBtn: true,
    muted: true,
  }
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
    <div className="my-list">
      <div className="row">
        <div className="col-12" >
          {title}
        </div>
      </div>
      <div className="row">
        {sources.map(videoInfo =>
          <div className="col-6 col-lg-3 video-listing-item" key={videoInfo.id}>
            <HoverVideo {...{videoJsOptions: videoJsOptions, videoInfo: {...videoInfo,src:videoInfo.trailer}}}/>
          </div>
        )}
      </div>
    </div>
  )
}
export default VideoList