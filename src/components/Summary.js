import React, { Fragment } from "react";

const Summary = ({data}) => {


  //extract data
  const { brand, year, plan } = data;
  
  if(brand === '' || year === '' || plan === '' ) return null;


  return (
    <Fragment>
      <h2>Resumen de Quotation</h2>
      <ul>
        <li>Brand: </li>
        <li>Plan: </li>
        <li>Year of the car: </li>
      </ul>
    </Fragment>
  );
};

export default Summary;
