import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PeriodGraph(props) {
  const [options, setoptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "월별 경고 발생 횟수",
      },
    },
  });
  const [labels, setlabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata([1, 2, 3]);
  }, []);

  return (
    <div>
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "횟수",
              data: data,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        }}
      />
    </div>
  );
}

export default PeriodGraph;
