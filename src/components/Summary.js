import React, { Fragment } from "react";
import styled from '@emotion/styled';
import { firstUppercase } from '../helper';


const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Summary = ({data}) => {


  //extract data
  const { brand, year, plan } = data;
  
  if(brand === '' || year === '' || plan === '' ) return null;


  return (
    <ContainerSummary>
      <h2>Summary of Quotation</h2>
      <ul>
        <li>Brand: {firstUppercase(brand)} </li>
        <li>Plan: {firstUppercase(plan)} </li>
        <li>Year of the car: {year} </li>
      </ul>
    </ContainerSummary>
  );
};

export default Summary;
