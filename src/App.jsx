import {
  Card,
  CardContent,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
import CasesCard from "./Components/CasesCard";
import LineChart from "./Components/LineChart";
import Map from "./Components/Map";
import TotalCases from "./Components/TotalCases";
import { sortData } from "./util";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountryInfo = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });
    };

    getCountryInfo();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        console.log(countryInfo);
      });
  };
  return (
    <div className="app">
      <Grid container md direction="column">
        <Grid container md className="app--header">
          <h1>COVID 19 Tracker</h1>
          {/* TODO: drop down */}
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid container md className="app--main">
          <Grid container md sm={12} className="app--left">
            <Grid container md sm={12} className="app--cards">
              <CasesCard
                borderColor="#009B09"
                title="Coronavirus Cases"
                cases={countryInfo.todayCases}
                total={countryInfo.cases}
              />
              <CasesCard
                borderColor="#32BB00"
                title="Recovered"
                cases={countryInfo.todayRecovered}
                total={countryInfo.recovered}
              />
              <CasesCard
                borderColor="#DB1B01"
                title="Deaths"
                cases={countryInfo.todayDeaths}
                total={countryInfo.deaths}
              />
            </Grid>
            <Grid container md sm={12}>
              <Map />
            </Grid>
          </Grid>
          <Grid container md={3} justify="center">
            <Card>
              <CardContent>
                <div className="app--sidebar-title">Total cases by country</div>
                <TotalCases data={tableData} />

                <div className="app--sidebar-title">Worldwide new cases</div>
                <LineChart caseType="cases" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
