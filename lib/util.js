import numeral from "numeral";

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

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
