import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function VideoPlayPage(props) {
  const videoURL = useSelector((state) => state.video.currentVideo);

  return (
    <>
      <div style={{ width: "100%", padding: "0rem 3rem 3rem 3rem" }}>
        <h2>{videoURL}</h2>
        <video style={{ width: "100%" }} src={videoURL} controls />
      </div>
    </>
  );
}

export default VideoPlayPage;
