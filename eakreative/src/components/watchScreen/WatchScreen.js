import {React,useEffect} from 'react'; 
import {useDispatch,useSelector} from 'react-redux';
import Header from '../Header/Header';
import VideoMetaData from '../videoMetaData/VideoMetaData';
import './watchScreen.scss';
import {useParams} from 'react-router-dom';
import { getVideoById } from '../../redux/actions/video.action';
import Comments from '../Comments/Comments';

const WatchScreen = () => {
    const {id} = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))

   }, [dispatch,id])

   //const { video } = useSelector(state => state.selectedVideo)
  const video = {
  
      "snippet":{
        "publishedAt": "2021-02-19T10:49:39Z",
        "channelId": "UCP_IYZTiqbmUqmI3KXHIEoQ",
        "title": "eKreative Egypt Team Weekend - 2021",
        "description": "Enjoy our journey to Egypt 2021. \nTeam. Strategic Planning. Inspiration.\n\nJoin our team here https://bit.ly/3qxq46L. \n\nOur web-site: https://www.ekreative.com \nInstagram: https://bit.ly/3qzwFxp\nFacebook: https://bit.ly/3awJVxi",
      
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/U9XOr9fNdlg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/U9XOr9fNdlg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/U9XOr9fNdlg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/U9XOr9fNdlg/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "eKreative",
        "categoryId": "24",
        "liveBroadcastContent": "none",
        "localized": {
          "title": "eKreative Egypt Team Weekend - 2021",
          "description": "Enjoy our journey to Egypt 2021. \nTeam. Strategic Planning. Inspiration.\n\nJoin our team here https://bit.ly/3qxq46L. \n\nOur web-site: https://www.ekreative.com \nInstagram: https://bit.ly/3qzwFxp\nFacebook: https://bit.ly/3awJVxi"
        }
      },
      "contentDetails": {
        "duration": "PT2M14S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": false,
        "contentRating": {},
        "projection": "rectangular"
      },
      "statistics": {
        "viewCount": "534",
        "likeCount": "24",
        "dislikeCount": "0",
        "favoriteCount": "0",
        "commentCount": "0"
      }
    }

      
   console.log(video);
    return (
        <div className="watchScreen">
        <Header/>
            <div className="container">
            <div className="watchScreen-body">
             <div className="watchScreen-body__player">
                        <iframe src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'
                        ></iframe>
                    </div>
                    
                    </div>
                    <VideoMetaData video={video} videoId={id}/>
                    <Comments totalComments={video?.statistics?.commentCount} />
              </div>  
        </div>
    )
}

export default WatchScreen
