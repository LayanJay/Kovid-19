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
import TotalCases from "./Components/TotalCases";
import { sortData, showDataOnMap, prettyPrintStat } from "./util";
import "leaflet/dist/leaflet.css";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import Footer from "./Components/Footer";

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
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

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
            value: country.countryInfo.iso3,
          }));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
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
        // console.log(data);
        if (data.countryInfo) {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
        } else {
          setMapCenter([34.80746, -40.4796]);
          setMapZoom(3);
        }
      });
  };

  return (
    <>
      <div className="app">
        <Grid container md direction="column">
          <Grid container md className="app--header">
            <div className="app--titleBox">
              <div className="app--titleBox-title">Pandemx.</div>
              <div className="app--titleBox-text">COVID 19 TRACKER</div>
            </div>

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
                  onClick={(e) => setCasesType("cases")}
                  borderColor="#F83B00"
                  title="Coronavirus Cases"
                  cases={prettyPrintStat(countryInfo.todayCases)}
                  total={prettyPrintStat(countryInfo.cases)}
                />
                <CasesCard
                  active={casesType === "recovered"}
                  onClick={(e) => setCasesType("recovered")}
                  borderColor="#32BB00"
                  title="Recovered"
                  cases={prettyPrintStat(countryInfo.todayRecovered)}
                  total={prettyPrintStat(countryInfo.recovered)}
                />
                <CasesCard
                  active={casesType === "deaths"}
                  onClick={(e) => setCasesType("deaths")}
                  borderColor="#DB1B01"
                  title="Deaths"
                  cases={prettyPrintStat(countryInfo.todayDeaths)}
                  total={prettyPrintStat(countryInfo.deaths)}
                />
              </Grid>
              <div>
                <div className="app--map">
                  <LeafletMap
                    center={mapCenter}
                    zoom={mapZoom}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {showDataOnMap(mapCountries, casesType)}
                  </LeafletMap>
                </div>
              </div>
            </Grid>
            <Grid container md={3} justify="center" className="app--right">
              <Card style={{ width: "100%" }}>
                <CardContent>
                  <div className="app--sidebar-title">
                    Total cases by country
                  </div>
                  <TotalCases data={tableData} />

                  <div className="app--sidebar-title">
                    Worldwide new {casesType}
                  </div>
                  <LineChart caseType={casesType} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default App;
