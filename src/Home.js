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
                    <VideoBanner videoInfo={SOURCE.find(src => src.id === "6")}/>
                </div>
                <VideoList {...{
                    title: "My List",
                    sources: SOURCE.slice(0, 4).map(item => {
                        return {
                            id: item.id,
                            title: item.title,
                            src: item.trailer,
                            poster: item.posterHor,
                        }
                    })
                }}/>
                <VideoList {...{
                    title:"Recommended",
                    sources:SOURCE.slice(4).map(item => {
                        return {
                            id: item.id,
                            title: item.title,
                            src: item.trailer,
                            poster: item.posterHor,
                        }
                    })
                }}/>
                <div style={{minHeight:"10%"}}/>
            </>
        )
    }
}