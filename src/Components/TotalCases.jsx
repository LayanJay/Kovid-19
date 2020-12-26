import React from "react";
import "./TotalCases.css";

function TotalCases({ data }) {
  return (
    <div className="table">
      {data.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>{cases}</td>
        </tr>
      ))}
    </div>
  );
}

export default TotalCases;
