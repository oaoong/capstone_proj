import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import Axios from "axios";
import LeftSide from "./Sections/LeftSide";
import MainPage from "./Sections/MainPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentVideo } from "../../../_actions/video_actions";

function LandingPage() {
  const [Video, setVideo] = useState([]);
  const dispatch = useDispatch();
  const currentVideo = useSelector((state) => state.video.currentVideo);

  useEffect(() => {
    Axios.get("/api/streaming/getAddress").then((response) => {
      if (response.status == 200) {
        setVideo(JSON.parse(response.data.body)[1]);
        dispatch(setCurrentVideo(JSON.parse(response.data.body)[1]));
        console.log("비디오 주소 정보", response);
      } else {
        alert("비디오 정보를 불러오는데 실패했습니다.");
      }
    });
  }, []);

  return (
    <>
      {/* <Col lg={4} md={6} sm={24}>
        <LeftSide videolist={Video} />
      </Col> */}
      <Col lg={6} md={6} sm={24}>
        <LeftSide />
      </Col>
      <Col lg={18} md={18} sm={24}>
        <MainPage />
      </Col>
    </>
  );
}

export default LandingPage;
