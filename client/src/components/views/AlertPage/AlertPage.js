import React, { useEffect, useState } from "react";
import { Alert, Row, Col } from "antd";
import Marquee from "react-fast-marquee";
import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) =>
  await axios.get(url).then((response) => JSON.parse(response.data.alerts));

function AlertPage() {
  // const [Alerts, setAlerts] = useState([]);
  const { data, error } = useSWR("/api/streaming/getAlerts", fetcher, {
    refreshInterval: 1000,
  });
  // const handleChange = async (Alerts) => {
  //   await updateAlerts(Alerts);
  //   return mutate();
  // };

  // useEffect(() => {
  //   getAlerts();
  // }, []);

  // const getAlerts = () => {
  //   axios.get("/api/streaming/getAlerts").then((response) => {
  //     if (response.status == 200) {
  //       setAlerts(JSON.parse(response.data.alerts));
  //       // console.log("alerts", JSON.parse(response.data.alerts));
  //     } else {
  //       alert("경고 문구를 가져오는 데 실패했습니다.");
  //     }
  //   });
  // };

  const onClose = (data) => {
    axios
      .post(`/api/streaming/removeAlerts/${data._id.$oid}`)
      .then(() => {
        console.log(`${data._id.$oid} 삭제 완료`);
      })
      .catch(() => {
        alert("경고 문구를 삭제하는 데 실패했습니다.");
      });
  };

  const renderAlerts = data?.map((alert, index) => {
    return (
      <Col className="alert-container" key={index}>
        <div className="alert">
          <Alert
            message={`${alert.data.timestamp.$date.substr(0, 19)}`}
            description={
              <Marquee pauseOnHover speed={40} gradient={false}>
                {`<${alert.data.location}>방면 <${alert.data.name}>의 <${alert.data.contents}>이(가) 감지되었습니다.`}
              </Marquee>
            }
            banner
            closable
            onClose={(e) => onClose(alert, e)}
          />
        </div>
      </Col>
    );
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Row>{renderAlerts}</Row>
    </>
  );
}

export default AlertPage;
