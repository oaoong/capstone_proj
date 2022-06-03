import React, { useEffect, useState, useMemo } from "react";
import { Alert, Row, Col, Button } from "antd";
import Marquee from "react-fast-marquee";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) =>
  await axios.get(url).then((response) => JSON.parse(response.data.alerts));

function AlertPage() {
  // const [Alerts, setAlerts] = useState([]);
  const { data = [], error } = useSWR("/api/streaming/getAlerts", fetcher, {
    refreshInterval: 1000,
  });

  const onClose = (data) => {
    axios.post(`/api/streaming/removeAlerts/${data._id.$oid}`).then(() => {
      console.log(`${data._id.$oid} 삭제 완료`);
    });
  };

  const renderAlerts = data.map((alert, index) => {
    return (
      <div
        className="alert"
        key={index}
        style={{ display: "flex" }}
        onClick={(e) => onClose(alert)}
      >
        <Alert
          message={`${alert.data.timestamp.$date.substr(0, 19)}`}
          description={
            <Marquee pauseOnHover speed={40} gradient={false}>
              {`<${alert.data.location}>방면 <${alert.data.name}>의 <${alert.data.contents}>이(가) 감지되었습니다.`}
            </Marquee>
          }
          banner
        />
      </div>
    );
  });

  if (error) return <div>failed to load</div>;
  if (data === []) return <div>loading...</div>;

  return (
    <>
      <Row>{renderAlerts}</Row>
    </>
  );
}

export default AlertPage;
