import React from 'react'
import bcvideo from '../Assets/bcvideo.mp4'

const VideoCard = () => {
    return (
        <div>
        <video id="background-video" autoplay loop muted>
            <source src={bcvideo} type="video/mp4"/>
        </video>
        </div>
    )
}

export default VideoCard
