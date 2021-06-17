import {React,useEffect,useSelector} from 'react'
import './comments.scss';




const Comments = ({totalComments}) => {

    return (
        <div>
        <div className="commentCount">
                   <span>{totalComments} comments</span>
                   
               
        </div>
        
        </div>
    )
}

export default Comments
