import { Grid } from "@material-ui/core";
import React from "react";
import "./CasesCard.css";

function CasesCard({ title, active, cases, borderColor, total, ...props }) {
  return (
    <>
      <Grid
        onClick={props.onClick}
        container
        md
        sm
        xs={12}
        style={{
          borderBottom: `6px solid ${borderColor} `,
        }}
        className="card"
      >
        <div className="card--title">{title}</div>
        <div className="card--cases" style={{ color: borderColor }}>
          {cases}
        </div>
        <div className="card--total">{total} total</div>
      </Grid>
    </>
  );
}

export default CasesCard;
