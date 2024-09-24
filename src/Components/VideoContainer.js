import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/Constant";
import { YOUR_API_KEY } from "../utils/Constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const VideoContainer = ({ btnID }) => {
  const [video, SetVideo] = useState([]);
  var YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUR_API_KEY}&videoCategoryId=${btnID}`;
  console.log(btnID);



  const getVideo = async () => {
    try {
      const url = await fetch(YOUTUBE_VIDEO_API);
    
    // Check if the response is not ok  
    if (!url.ok) {
      throw new Error(`Network response was not ok: ${url.statusText}`);
    }
    
    const data = await url.json();
    SetVideo(data.items);
    console.log(data);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  useEffect(() => {
    getVideo();
    // eslint-disable-next-line
  }, [btnID]);
  return (
    <div className="flex flex-wrap justify-center items-center ">
      {video.map(function (video) {
        return (
          <Link to={`watch?v=${video.id}`} key={`vi-${video.id}`}>
            <Videocard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;

// Use higher order Component in React
// {/* <Link to={`watch?v=${video.id}`} key={`vi-${video.id}`}><AdVideocard info={video} /></Link> */}
