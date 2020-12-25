import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import CasesCard from "./Components/CasesCard";
import LineChart from "./Components/LineChart";
import Map from "./Components/Map";
import TotalCases from "./Components/TotalCases";

function App() {
  return (
    <div className="app">
      <Grid container md direction="column">
        <Grid container md justify="space-between">
          <h1>COVID 19 Tracker</h1>
          {/* TODO: drop down */}
          <div>dropdown</div>
        </Grid>
        <Grid container md>
          <Grid container md sm={12}>
            <Grid container md sm={12} justify="space-around">
              <CasesCard bgColor="#009B09" title="corona cases" cases="1234" />
              <CasesCard bgColor="#32BB00" title="recovered" cases="12345" />
              <CasesCard bgColor="#DB1B01" title="deaths" cases="123456" />
            </Grid>
            <Grid container m sm={12}>
              <Map />
            </Grid>
          </Grid>
          <Grid container md={4} sm={12} direction="column">
            <TotalCases />
            <LineChart />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
