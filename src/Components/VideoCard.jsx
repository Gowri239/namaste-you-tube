import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="p-3 m-1 rounded-lg shadow-lg w-97 h-70 cursor-pointer">
      <img
        className="rounded-lg h-40 w-full object-cover"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="p-2 flex-1 flex flex-col">
        <li className="font-bold text-lg truncate">{channelTitle}</li>
        <li className="text-sm line-clamp-2">{title}</li>
        <li className="text-xs text-gray-500 mt-auto">
          {statistics.viewCount} views
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
