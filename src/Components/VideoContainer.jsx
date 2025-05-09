import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/Constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <div key={video.id}>
          <Link to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
