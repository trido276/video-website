import 'video.js/dist/video-js.css';
import 'videojs-seek-buttons';
import videojs from 'video.js';

export const createBackBtn = (player, {
  onBack
}) => {
  let backBtn = videojs.extend(videojs.getComponent('Button'), {
    constructor: function(player) {
      videojs.getComponent('Button').apply(this, arguments);
      player.on('userinactive', () => {
        if (!player.techGet_('paused')) this.addClass('vjs-hidden')
      })
      player.on('useractive', () => {
        this.removeClass('vjs-hidden')
      })
    },
    buildCSSClass: function() {
      return 'vjs-back-button';
    },
    handleClick: function() {
      onBack()
    }
  })
  videojs.registerComponent('BackButton', backBtn);
  player.addChild('BackButton', {});
}

export const removeBackBtn = (player) => {
  if (player && typeof player.removeChild === 'function') {
    player.removeChild('BackButton')
  }
}

export const createInnerTitle = (player, {title}) => {
  let controlBarComponent = player.getChild('ControlBar')
  let titleComponent = controlBarComponent.addChild('Component');
  titleComponent.addClass('vjs-control')
  titleComponent.addClass('vjs-title')
  videojs.registerComponent("InnerTitleComponent", videojs.extend(videojs.getComponent('Component', {
    constructor: function(player) {
      videojs.getComponent('Component').apply(this, arguments);
    },
  })));
  titleComponent.addChild('innerTitleComponent',{})
  let innerTitleComponent = titleComponent.getChild('InnerTitleComponent')
  innerTitleComponent.el().innerHTML = title || ''
  innerTitleComponent.addClass('vjs-inner-title')
}

export const removeInnerTitle = (player) => {
  if (player && typeof player.removeChild === 'function') {
    let controlBarComponent = player.getChild('ControlBar')
    if (controlBarComponent && typeof controlBarComponent.removeChild === 'function' ) {
      controlBarComponent.removeChild('component')
    }
  }
}

export const createMuteBtn = (player) => {
  let muteBtn = videojs.extend(videojs.getComponent('MuteToggle'), {
    constructor: function(player) {
      videojs.getComponent('MuteToggle').apply(this, arguments);
    },
    buildCSSClass: function() {
      return 'vjs-mute-button';
    },
  })
  videojs.registerComponent('MuteButton', muteBtn);
  player.addChild('MuteButton', {});
}

export const removeMuteBtn = (player) => {
  if (player && typeof player.removeChild === 'function') {
    player.removeChild('MuteButton')
  }
}

export const createSubBannerBtn = (player, {onRedirect, logo, description}) => {
  let subBanner = videojs.extend(videojs.getComponent('Component'), {
    constructor: function(player) {
      videojs.getComponent('Component').apply(this, arguments);
      this.addClass('video-js')
      this.addClass('vjs-modal-dialog')
      this.addClass('vjs-sub-banner')
      this.el().innerHTML = `
      <img src="${logo || ''}" class="logo">
      <div class="description">
      ${description || ""}
      </div>
      `
    },
  })

  let redirectBtn = videojs.extend(videojs.getComponent('Button'), {
    constructor: function(player) {
      videojs.getComponent('Button').apply(this, arguments);
      this.el().innerHTML = `
      <div class="title">
      Play
      </div>
      `
    },
    buildCSSClass: function() {
      return 'redirect-button';
    },
    handleClick: function() {
      onRedirect()
    }
  })

  videojs.registerComponent('RedirectBtn', redirectBtn);
  videojs.registerComponent('SubBanner', subBanner);
  player.addChild('SubBanner', {});
  player.getChild('SubBanner').addChild('RedirectBtn', {});
}

export const removeSubBannerBtn = (player) => {
  if (player && typeof player.removeChild === 'function') {
    player.removeChild('SubBanner')
  }
}