/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";

function RightMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">메인</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/statistics">통계</a>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(RightMenu);
