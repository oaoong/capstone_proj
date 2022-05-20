import React from "react";
import AlertPage from "../../AlertPage/AlertPage";
import ControlPage from "../../ControlPage/ControlPage";
import "./Section.css";

function LeftSide() {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "1rem",
        overflowY: "hidden",
      }}
    >
      <div style={{ position: "static", height: "20%", overflowY: "auto" }}>
        <ControlPage />
      </div>
      <div
        class="box"
        style={{
          position: "static",
          height: "80%",
          overflowY: "auto",
          marginBottom: "2rem",
        }}
      >
        <AlertPage />
      </div>
    </div>
  );
}

export default LeftSide;
