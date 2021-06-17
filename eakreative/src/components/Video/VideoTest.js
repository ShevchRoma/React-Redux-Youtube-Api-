import React from 'react'
import request from '../../redux/api/api';

const VideoTest = ({video}) => {
    const{id,snippet:{
        channelTitle,
        title,
        publishedAt,
        thumbnails:{medium}
    },
contentDetails,
} = video

 const [views,setViews] = useState(null);

 const _videoId = id?.videoId || contentDetails?.videoId || id

 const history = useHistory();

 useEffect(() =>{
     const get_video_details = async() =>{
         const{
             data:{items},
         } = await request('/videos',{
             params:{
                 part: 'contentDetails,statistics',
                 id: _videoId
             }
         })
         setViews(items[0].statistics.viewCount)
         
     }
     get_video_details()
 },[_videoId])

 const handleVideoClick = () =>{
     history.push(`/watch/${_videoId}`)
 }
    return (
        <div className="video" onClick={handleVideoClick}>
            
        </div>
    )
}

export default VideoTest
