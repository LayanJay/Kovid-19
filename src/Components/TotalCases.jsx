import React from "react";
import numeral from "numeral";
import "./TotalCases.css";

function TotalCases({ data }) {
  return (
    <div className="table">
      {data.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default TotalCases;
