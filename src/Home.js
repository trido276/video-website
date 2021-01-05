import React, { Component } from 'react';
import VideoList from './modules/VideoList';
import VideoBanner from './modules/VideoBanner/index.js';
import './App.scss';
const SOURCE = require('./source.json')
export default class Home extends Component {
    render() {
        return (
            <>
            <div className="video-banner">
            <VideoBanner videoInfo={{
                "id":"6",
                "title":"Attack on Titan Opening 6 — Final Season | My War",
                "logo": "https://images.squarespace-cdn.com/content/v1/5bfc2f03af20967c04dd3cb7/1552706321589-JHO663ZN310IEWOW2KC4/ke17ZwdGBToddI8pDm48kGriWbKM87yKft9gfUQrkQ1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxTFRHy9_jbmAPAUlBF0ZmRXIqe8gQm25-FK0lfuuj8MmHhqoToCk9JCW3J3XnuIUw/Attack+on+Titan+Logo.png",
                "description": "The last time fans saw Eren, Mikasa, Armin and the gang, Attack On Titan had just dropped its long-awaited basement reveal.",
                "posterBig":"//s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/05/30004846/attack-on-titan-season-4-release-date-trailer-more.jpg",
                "posterHor":"//i.ytimg.com/vi/Db1fj2pRFu8/hq720.jpg",
                "posterVer":"//i.ytimg.com/vi/Db1fj2pRFu8/hq720.jpg",
                "src":  "https://cdn-cf-east.streamable.com/video/mp4/533vp9_1.mp4?Expires=1609477440&Signature=lYFpOXcAkcyViDtyvcmavMNPTh1gO~wTtObzKlmcauFmQvc2YtN2NjAknYOpvpW7g9gc0cx0mCpZ2Kr3AKMqBytpKtlMu1~okSCunu9KBifQ-2AM18I4jKf8ewv6PCbjM9lbFvM2JjQmy1jnSOR~~oynsaGhkbSdQpJq9DJ7g3-wOsuT8Wj-o6WyWdz~CuurcfwQO1gzQDC2avc3CWXlbmnT7BAIxRma9LetCiP-SV6GypG0x5f05hVhVaWNWBesgXl-juK5ahfaa98ffyfMxK4cZxlBnxWKKvt1uK~dq5NPOItwHGaz3EI9wk~e3f5r6g0QMAq0pqzwcf51wdzHLQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
                "trailer":  "https://cdn-cf-east.streamable.com/video/mp4/533vp9_1.mp4?Expires=1609477440&Signature=lYFpOXcAkcyViDtyvcmavMNPTh1gO~wTtObzKlmcauFmQvc2YtN2NjAknYOpvpW7g9gc0cx0mCpZ2Kr3AKMqBytpKtlMu1~okSCunu9KBifQ-2AM18I4jKf8ewv6PCbjM9lbFvM2JjQmy1jnSOR~~oynsaGhkbSdQpJq9DJ7g3-wOsuT8Wj-o6WyWdz~CuurcfwQO1gzQDC2avc3CWXlbmnT7BAIxRma9LetCiP-SV6GypG0x5f05hVhVaWNWBesgXl-juK5ahfaa98ffyfMxK4cZxlBnxWKKvt1uK~dq5NPOItwHGaz3EI9wk~e3f5r6g0QMAq0pqzwcf51wdzHLQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
            }}/>
        </div>
            <VideoList {...{title:"My List", sources:SOURCE.slice(0, 4)}} />
            <VideoList {...{title:"Recommended", sources:SOURCE.slice(4)}} />
            <div style={{minHeight:"10%"}}/>
            </>
        )
    }
}