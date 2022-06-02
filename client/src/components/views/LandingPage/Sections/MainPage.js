import React from "react";
import VideoPlayPage from "../../VideoPlayPage/VideoPlayPage";
// import { useSelector } from "react-redux";

function MainPage(props) {
  return (
    <div
      className="box"
      style={{
        width: "100%",
        height: "80vh",
        overflowY: "auto",
      }}
    >
      <VideoPlayPage />
    </div>
  );
}

export default MainPage;
