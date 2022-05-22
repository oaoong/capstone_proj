import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function TypesGraph(props) {
  const [labels, setlabels] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let types = [];
    let numbers = [];
    props.contents.map((data, idx) => {
      numbers.push(data.total);
      types.push(data._id);
    });
    setdata(numbers);
    setlabels(types);
  }, []);

  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "# of Votes",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default TypesGraph;
