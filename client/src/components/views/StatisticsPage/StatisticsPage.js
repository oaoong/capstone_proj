import React, { useEffect, useState } from "react";
import { Col } from "antd";
import PeriodGraph from "./Sections/PeriodGraph";
import TypesGraph from "./Sections/TypesGraph";
import axios from "axios";

function StatisticsPage() {
  const [contents, setcontents] = useState(null);
  const [month, setmonth] = useState(null);

  useEffect(() => {
    getContents();
    getMonth();
  }, []);

  const getContents = () => {
    axios.get("/api/streaming/getContents").then((response) => {
      if (response.status == 200) {
        setcontents(JSON.parse(response.data.contents));
        console.log("종류별경고", JSON.parse(response.data.contents));
      } else {
        alert("종류별 경고를 가져오는 데 실패했습니다.");
      }
    });
  };

  const getMonth = () => {
    axios.get("/api/streaming/getMonth").then((response) => {
      if (response.status == 200) {
        setmonth(JSON.parse(response.data.month));
        console.log("월별정보", JSON.parse(response.data.month));
      } else {
        alert("월별 정보를 가져오는 데 실패했습니다.");
      }
    });
  };

  return (
    <>
      <Col lg={12} md={12} sm={24}>
        {contents && <TypesGraph contents={contents} />}
      </Col>
      <Col lg={12} md={12} sm={24}>
        {month && <PeriodGraph month={month} />}
      </Col>
    </>
  );
}

export default StatisticsPage;
