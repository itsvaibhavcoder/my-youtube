import React, {useEffect, useState} from 'react';
import VideoCard from './VideoCard'
import {YOUTUBE_VIDEOS_API} from "../contants/constant";
import { Link } from "react-router-dom";
const VideoContainer = () => {

  const[videos,setVideos] = useState([]);
  
  useEffect(()=>{
     getVideo();
  }, [])

  const getVideo = async()=>{
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log(data);
    setVideos(data.items);
  }
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
