import React from 'react';

const VideoDetail = ({ video }) => {
    
    if (!video) {
        return <div>...loading</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">  
                <iframe src={videoSrc} title="videoPlayer" frameBorder="0"></iframe>
            </div>
            <div className="ui segment">
                <div className="ui header">{video.snippet.title}</div>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;