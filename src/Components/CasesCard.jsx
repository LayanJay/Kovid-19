import { Grid } from "@material-ui/core";
import React from "react";
import "./CasesCard.css";

function CasesCard({ title, cases, borderColor, total }) {
  return (
    <>
      <Grid
        container
        md
        sm
        xs={12}
        style={{ borderBottom: `6px solid ${borderColor} ` }}
        className="card"
      >
        <div className="card--title">{title}</div>
        <div className="card--cases">{cases}</div>
        <div className="card--total">{total} Total</div>
      </Grid>
    </>
  );
}

export default CasesCard;
