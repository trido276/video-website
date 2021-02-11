import React, {useState, useEffect} from 'react';
import VideoList from '../VideoList';
import Footer from '../Footer';
import VideoBanner from '../VideoBanner/index.js';
import Command from '../../plugins/api';
import './style.scss';
import {useAsyncEffect} from 'use-async-effect'
// TODO: build api and get source
const Home = () => {
    const [mylist, updateMylist] = useState([]);
    const [recommend, updateRecommend] = useState([]);
    const [banner, updateBanner] = useState({});

    useAsyncEffect(() => {
        Promise.all([
            Command('videos',{id:'5'}),
            Command('mylist'),
            Command('recommend')
        ]).then(([bann, ml, rec]) => {
            updateMylist(ml);
            updateRecommend(rec);
            updateBanner({
                ...{poster:bann.posterBig},
                ...bann
            });
        }).catch(err => {
            console.log(err)
        })
    },[]);

    return (
        <>
            <div className="video-banner">
                <VideoBanner videoInfo={banner}/>
            </div>
            <VideoList
                title="My List"
                sources={mylist
                    .map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        src: item.trailer,
                        poster: item.posterHor,
                    }
                })
            }
            />
            <VideoList
                title="Recommended"
                sources={recommend
                    .map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        src: item.trailer,
                        poster: item.posterHor,
                    }
                })
            }
            />
            <Footer/>
        </>
    )
}

export default Home