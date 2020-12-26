import React, { useState, useEffect } from "react";
import { buildChartData } from "../util";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

function LineChart({ caseType = "cases" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => response.json())
        .then((data) => {
          const chartData = buildChartData(data, caseType);
          setData(chartData);
        });
    };
    fetchData();
  }, [caseType]);
  return (
    <div className="chart">
      {data?.length > 0 && (
        <Line
          className="chart--line"
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: "#FF8776",
                borderColor: "#DB1B01",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineChart;
