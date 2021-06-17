import React from 'react'
import './videoMetaData.scss';
import {AiFillEye} from 'react-icons/ai';
import moment from 'moment';
import {MdThumbUp,MdThumbDown} from 'react-icons/md';

const VideoMetaData = ({ video: { snippet, statistics }}, videoId ) => {
    const { channelId, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics
 
 
    return (
        <div className="videoMetaData">
           <div className="videoMetaData-top">
              <h2>{title}</h2>
              <div className="videoMetaData-top-body">
              <div className="videoMetaData-top-body__item">
              <span>
              <AiFillEye />{viewCount}</span> |<span>{moment(publishedAt).fromNow()}</span>
              </div>
              <div className="videoMetaData-top-body__item">
              <span className='item'><MdThumbUp size={26}/>{likeCount}</span><span className='item'><MdThumbDown size={26} />{dislikeCount}</span>
              </div>
              
              </div>
              
           </div>
           <div className="videoMetaData-channel">
           <img  alt="" width="48" src="https://yt3.ggpht.com/ytc/AAUvwng-jVlw3kEAhr0YMrL-ftPXQ775rVAePM8r6QmOxw=s176-c-k-c0x00ffffff-no-rj"/>
           <span><b>eKreative</b></span>
           </div>
           <div className="videoMetaData-description">
               {description}
           </div>
           
        </div>
    )
}

export default VideoMetaData
