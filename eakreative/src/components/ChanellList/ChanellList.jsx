import React,{useEffect} from 'react'
import './chanellList.scss';
import Video from '../Video/Video';
import Header from '../Header/Header';
import {useDispatch,useSelector} from "react-redux";
import {getVideosChannel} from './../../redux/actions/video.action';
import InfiniteScroll from 'react-infinite-scroll-component';


const ChanellList = () => {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getVideosChannel())
    },[dispatch])

    const {videos} = useSelector(state => state.getVideos)
    const fetchData = () =>{
          dispatch(getVideosChannel())
    }
    return (
    <div>
    <Header />
    <div className="listVideos">
        <div className="listVideos__videos">
        <InfiniteScroll
        dataLength ={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
        <div className="spinner-border text-danger d-block mx-auto">

        </div>}
        className="row"
        >

            {videos.map((video) =>(
                <Video video={video} key={video.id} /> 
            ))}
            </InfiniteScroll>
        </div>
    </div>
        
        </div>
    )
}

export default ChanellList;
