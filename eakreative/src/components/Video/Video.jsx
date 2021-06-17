import React from 'react'
import './video.scss';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';

import {AiFillEye} from 'react-icons/ai';
import request from '../../redux/api/api';
import moment from 'moment';
const Video = ({video}) => {
    const {id,snippet:{
        channelTitle,
        title,
        publishedAt,
        thumbnails: {medium},
    },
    contentDetails,
} = video

    const [views,setViews] = useState(null);
    
    
    
    const _videoId = id?.videoId || contentDetails?.videoId || id


     const history = useHistory();

    useEffect(() => {
        const get_video_details = async () => {
           const {
              data: { items },
           } = await request('/videos', {
              params: {
                 part: 'contentDetails,statistics',
                 id: _videoId,
              },
           })
           
           setViews(items[0].statistics.viewCount)
        }
        get_video_details()
     }, [_videoId])

     const handleVideoClick = () => {
        history.push(`/watch/${_videoId}`)
     }
  
     
    return (
        <div className="video" onClick = {handleVideoClick}>
        <div className="video__top">
            <img src={medium.url}alt='' />
            <span>02:14</span>
        </div>
        <div className="video__title">
            {title} 
        </div>
        <div className="video__details">
            <span>
           <AiFillEye />{views} Views |
            </span>
            <span>{moment(publishedAt).fromNow()}</span>
        </div>
        <div className="video__channel">
            <img  alt="" width="48" src="https://yt3.ggpht.com/ytc/AAUvwng-jVlw3kEAhr0YMrL-ftPXQ775rVAePM8r6QmOxw=s176-c-k-c0x00ffffff-no-rj"/>
            <p>{channelTitle}</p>
            </div>
            </div>
    )
}

export default Video
