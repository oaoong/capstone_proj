import React, { useEffect, useState } from "react";
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
          src="http://media.w3.org/2010/05/sintel/trailer.mp4"
          controls
        />
        {/* <img
          style={{
            width: "100%",
            padding: "0rem 1rem 3rem 1rem",
            maxHeight: "500px",
          }}
          alt="stream"
          src={videoStream}
        /> */}
      </div>
    </>
  );
}

export default VideoPlayPage;
