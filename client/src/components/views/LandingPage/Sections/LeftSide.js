import React from "react";
import AlertPage from "../../AlertPage/AlertPage";
import ControlPage from "../../ControlPage/ControlPage";

function LeftSide() {
  return (
    <div
      style={{
        width: "100%",
        height: "450px",
        border: ".2rem solid #ececec",
        borderRadius: "4px",
        padding: "1rem",
        marginBottom: "1rem",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          position: "static",
          height: "50%",
          overflowY: "auto",
          marginBottom: "2rem",
        }}
      >
        <AlertPage />
      </div>

      <div style={{ position: "static", height: "50%", overflowY: "auto" }}>
        <ControlPage />
      </div>
    </div>
  );
}

export default LeftSide;
