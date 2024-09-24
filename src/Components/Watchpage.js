import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="flex flex-col px-5">
  <div className="w-full">
    <iframe
      className="w-full h-[calc(100vw*0.56)] md:w-[80vw] md:h-[calc(80vw*0.56)] lg:w-[60vw] lg:h-[calc(60vw*0.56)]"
      src={`https://www.youtube.com/embed/${searchParams.get("v")}?autoplay=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  <CommentContainer />
</div>

  );
};

export default Watchpage;
