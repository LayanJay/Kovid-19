import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 2,
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
          format: "MMM DD YYYY",
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

export const casesTypeColors = {
  cases: {
    hex: "#F83B00",
    half_opacity: "rgba(248, 59, 0, 0.5)",
    multiplier: 800,
  },
  recovered: {
    hex: "#32BB00",
    half_opacity: "rgba(50, 187, 0, 0.5)",
    multiplier: 1200,
  },
  deaths: {
    hex: "#DB1B01",
    half_opacity: "rgba(219, 27, 1, 0.5)",
    multiplier: 2000,
  },
};

const LineChart = ({ data, caseType }) => {
  return (
    <div className="w-full h-full">
      {data?.length > 0 && (
        <Line
          className="w-full h-full"
          options={options}
          data={{
            datasets: [
              {
                label: `# of ${caseType}`,
                backgroundColor: casesTypeColors[caseType].half_opacity,
                fill: true,
                borderColor: casesTypeColors[caseType].hex,
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default LineChart;
