import React, {useEffect, useRef} from 'react';
import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import './style.scss'
import videojs from 'video.js';
import {
  createBackBtn,
  removeBackBtn,
  createInnerTitle,
  removeInnerTitle,
  createMuteBtn,
  removeMuteBtn,
  createSubBannerBtn} from '../custom-video-component.js';

const VideoPlayer = (props) => {
  const {
    functions,
    videoJsOptions,
    videoInfo,
  } = props
  const videoNode = useRef(null);
  const w = window

  useEffect(() => {
    let player = videoNode?.current ? videojs(videoNode.current, videoJsOptions) : null;
    if (JSON.stringify(videoJsOptions) && JSON.stringify(videoInfo)) {
      if (videoInfo?.src && player) {
        const {showBackBtn, showInnerTitle, showSeekBtns, showMuteBtn, showSubBanner, delayPlay, autoplay} = videoJsOptions
        player.src(videoInfo?.src)

        
        if (showBackBtn) {
          removeBackBtn(player)
          createBackBtn(player, {onBack: () => w.history.back()})
        }

        if (showSubBanner) {
          createSubBannerBtn(player, {
            onRedirect: () => {
              w.location.href= `/player/${videoInfo?.id}`
            },
            logo: videoInfo?.logo,
            description: videoInfo?.description
          } )
        }

        if (!player.error_) {
          
          if (showMuteBtn) {
            removeMuteBtn(player)
            createMuteBtn(player)
          }
          
          if (showSeekBtns) {
            player.controlBar?.removeChild('seekBack')
            player.controlBar?.removeChild('seekForward')
            player.seekButtons({
              forward: 10,
              back: 10
            });
          }
          if (showInnerTitle) {
            removeInnerTitle(player)
            createInnerTitle(player, {title: videoInfo?.title})
          }
        }
        
        if (delayPlay) {
          player.ready(function() {
            let player = this;
            setTimeout(function(){
              player.play();
            }, delayPlay || 0);
          })
        }
      }
    }
  }, [videoJsOptions,JSON.stringify(videoInfo)]);

  return (
    <div data-vjs-player>
      <video
        // data-setup='{ "aspectRatio":"640:267"}'
        onFocus={functions?.onFocus}
        onBlur={functions?.onBlur}
        onMouseLeave={functions?.onMouseLeave}
        onMouseEnter={functions?.onMouseEnter}
        className="video-js vjs-default-skin"
        ref={videoNode}>
      </video>
    </div>
  )
}

export default VideoPlayer