import React from "react";
import VideoPlayPage from "../../VideoPlayPage/VideoPlayPage";
import { useSelector } from "react-redux";

function MainPage(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        marginBottom: "1rem",
        overflowY: "auto",
      }}
    >
      <VideoPlayPage />
    </div>
  );
}

export default MainPage;
