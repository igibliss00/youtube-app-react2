import axios from 'axios';

const KEY = "AIzaSyDWuX1aH2hXa4gxF-Vknryfj9HS0Xb_Zd4";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});