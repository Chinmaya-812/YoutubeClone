import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUR_SideSearch_API } from "../utils/Constant";
import moment from "moment";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const SideSearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  var params = searchParams.get("q");
  //   console.log(params)

  const [video, SetVideo] = useState([]);
  const FetchData = async () => {
    try {
      const URL = await fetch(YOUR_SideSearch_API + params);

      if (!URL.ok) {
        throw new Error(`Network response was not ok: ${URL.statusText}`);
      }
      const data = await URL.json();
      SetVideo(data.items);
      //   console.log(data);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };
  console.log(video);

  useEffect(() => {
    FetchData();
    dispatch(closeMenu())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <div className="flex flex-col absolute lg:left-20 sm:left-0 sm:p-4 ">
      {video &&
        video.map(function (i) {
          return (
            <Link to={`/watch?v=${i.id.videoId}`} key={`vi-${i.id.videoId}`}>
              <div className="flex flex-col sm:flex-row mt-10">
                <div>
                  <img src={i.snippet.thumbnails.medium.url} alt="" className="w-full h-[15rem]"/>
                </div>
                <div className="pl-4">
                  <h1 className="font-semibold text-lg">{i?.snippet?.title}</h1>
                  <h6 className="text-gray-600 font-bold pt-3"> {i?.snippet?.channelTitle} <span className="text-gray-500 text-xl">•</span>
                  <span className="text-gray-600 font-semibold pt-3 pl-3">{moment(i?.snippet?.publishedAt, "YYYYMMDD").fromNow()}</span> </h6>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SideSearchPage;

/* 
<div className="flex flex-col sm:absolute lg:left-20 sm:left-0 sm:p-4">
  {video &&
    video.map(function (i) {
      return (
        <Link to={`/watch?v=${i.id.videoId}`} key={`vi-${i.id.videoId}`}>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="w-full sm:w-1/3">
              <img src={i.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="pl-4 sm:pl-0 sm:w-2/3 pt-4 sm:pt-0">
              <h1 className="font-semibold text-lg">{i?.snippet?.title}</h1>
              <h6 className="text-gray-600 font-bold">
                {i?.snippet?.channelTitle}
                <span className="text-gray-500 text-xl">•</span>
                <span className="text-gray-600 font-semibold pt-3">
                  {moment(i?.snippet?.publishedAt, "YYYYMMDD").fromNow()}
                </span>
              </h6>
            </div>
          </div>
        </Link>
      );
    })}
</div> */
