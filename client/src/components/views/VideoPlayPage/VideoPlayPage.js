import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

function VideoPlayPage() {
  const [videoStream, setvideoStream] = useState("");

  useEffect(() => {
    setvideoStream(`${videoURL}/?action=stream`);
  }, []);

  const videoURL = useSelector((state) => state.video.currentVideo);

  return (
    <>
      <div
        style={{
          height: "80vh",
        }}
      >
        <h2>{videoURL}</h2>

        <video
          style={{
            width: "100%",
            padding: "0rem 1rem 3rem 1rem",
            maxHeight: "500px",
          }}
          src={videoStream}
          controls
        />
        {/* <img width="500" height="500" alt="stream" src={videoStream} /> */}
      </div>
    </>
  );
}

export default VideoPlayPage;
