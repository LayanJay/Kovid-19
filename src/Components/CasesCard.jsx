import { Grid } from "@material-ui/core";
import React from "react";

function CasesCard({ title, cases, bgColor }) {
  return (
    <div>
      <Grid
        container
        md
        sm
        xs={12}
        direction="column"
        alignItems="baseline"
        style={{ backgroundColor: bgColor }}
      >
        <h3>{title}</h3>
        <h2>{cases}</h2>
        <p>dummy</p>
      </Grid>
    </div>
  );
}

export default CasesCard;
