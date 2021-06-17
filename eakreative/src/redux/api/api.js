import axios from 'axios';


const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
       key: 'AIzaSyDPYcR0686XmkrHgKeTwPSXQqbtf03YJek',
    },
 })
 

export default request;