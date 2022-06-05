import React, { useState } from "react";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";

function AlertComponent(props) {
  const [alert, setalert] = useState(props.alert);
  const [index, setindex] = useState(props.index);

  return (
    <div
      className="alert"
      key={index}
      style={{ display: "flex" }}
      // onClick={() => {
      //   props.onClose(alert);
      // }}
    >
      <Alert
        message={`${alert.data.timestamp.$date.substr(0, 19)}`}
        description={
          <Marquee pauseOnHover speed={40} gradient={false}>
            {`<${alert.data.location}>방면 <${alert.data.name}>의 <${alert.data.contents}>이(가) 감지되었습니다.`}
          </Marquee>
        }
        banner
        closable
        onClose={() => {
          props.onClose(alert);
        }}
      />
    </div>
  );
}

export default AlertComponent;
