import React, { useState, useEffect } from 'react';
import { API_KEY } from "../constant/constant";
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoID = searchParams.get("v");
  const [comments, setComments] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 100;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    if (videoID && API_KEY) {
      fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.items || []);
        })
        .catch((error) => console.error('Error fetching comments:', error));
    }
  }, [videoID]);

  const videoSrc = `https://www.youtube.com/embed/${searchParams.get("v")}`;

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-screen-lg px-5 gap-4">
        <div className="lg:col-span-1">
          <iframe
            width="100%"
            height="600"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="lg:col-span-2">
          <LiveChat />
        </div>
      </div>
      <div className="w-full max-w-screen-lg px-5 mt-8 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.length > 0 ? (
          <ul className="w-full">
            {comments.map((commentItem) => {
              const {
                textDisplay,
                authorDisplayName,
                authorProfileImageUrl
              } = commentItem.snippet.topLevelComment.snippet;

              return (
                <li
                  key={commentItem.id}
                  className="flex items-start p-3 mb-3 border border-gray-300 rounded-md bg-white shadow-sm"
                >
                  <img
                    src={authorProfileImageUrl}
                    alt={authorDisplayName}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{authorDisplayName}</p>
                    <p className="text-sm">
                      {isExpanded ? textDisplay : `${textDisplay.slice(0, characterLimit)}${textDisplay.length > characterLimit ? '...' : ''}`}
                      {textDisplay.length > characterLimit && (
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={handleReadMore}
                        >
                          {isExpanded ? ' Show Less' : ' Read More'}
                        </span>
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default WatchPage;
