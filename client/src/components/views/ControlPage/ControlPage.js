import React from "react";
import { Button } from "antd";

function ControlPage() {
  const onButton1Click = () => {
    alert("button1 clicked");
    // 수동 경고?
  };
  const onButton2Click = () => {
    alert("button2 clicked");
  };

  return (
    <div>
      {/* <Button
        onClick={onButton1Click}
        style={{ width: "100%", marginBottom: "0.5rem" }}
        type="primary"
      >
        Button 1
      </Button>
      <Button onClick={onButton2Click} style={{ width: "100%" }}>
        Button 2
      </Button> */}
    </div>
  );
}

export default ControlPage;
