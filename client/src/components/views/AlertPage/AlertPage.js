import React, { useState, useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import AlertComponent from "./Sections/AlertComponent";

const fetcher = async (url) =>
  await axios.get(url).then((response) => JSON.parse(response.data.alerts));

function AlertPage() {
  const {
    data = [],
    error,
    // mutate,
  } = useSWR("/api/streaming/getAlerts", fetcher, {
    refreshInterval: 1000,
  });

  const onClose = async (alert) => {
    axios.post(`/api/streaming/removeAlerts/${alert._id.$oid}`).then(() => {
      console.log(`${alert._id.$oid} 삭제 완료`);
      // mutate(fetcher("/api/streaming/getAlerts"), true);
    });
    // const options = { optimisticData: data, rollbackOnError: true };
    // const data = { ...data, data };
    // mutate("/api/streaming/getAlerts", renderAlerts(data), options);
  };

  const renderAlerts = data.map((alert, index) => {
    return (
      <div key={alert._id.$oid}>
        <AlertComponent alert={alert} index={index} onClose={onClose} />
      </div>
    );
  });

  if (error) return <div>failed to load</div>;
  if (data === []) return <div>loading...</div>;

  return <div>{renderAlerts}</div>;
}

export default AlertPage;
