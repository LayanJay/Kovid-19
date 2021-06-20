import numeral from "numeral";

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const buildChartData = (data, casesType, country) => {
  let chartData = [];
  let lastDataPoint;

  if (country !== 'Worldwide') {
    for (let date in data.timeline[casesType]) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data.timeline[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data.timeline[casesType][date];
    }
  } else {
    for (let date in data[casesType]) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
  }


  return chartData;
};