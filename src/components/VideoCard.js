import React from 'react'

const VideoCard = ({info}) => {
  console.log(info)
  return (
    <div className="ml-2 cursor-pointer w-64 bg-white shadow-lg rounded-lg overflow-hidden"> 
      <img 
        alt="thumbnail" 
        src={info?.snippet?.thumbnails?.medium?.url}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{info?.snippet?.title}</h3>
        <p className="text-sm text-gray-600 mt-1 font-bold">{info?.snippet?.channelTitle}</p>
        <p className="text-sm text-gray-500 mt-1">{info?.statistics?.viewCount} views</p>
      </div>
    </div>
  )
}

export default VideoCard
