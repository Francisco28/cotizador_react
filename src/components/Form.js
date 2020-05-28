import React, { useState } from 'react';
import { getDifferenceYear, calculateBrand, getPlan } from './../helper';

import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 94%;
    text-align: center;
    margin-bottom: 2rem;
    
`;

const Form = ({saveSummary, saveLoading}) => {

    //state - hooks
    const [ data, saveData ] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    const [ error, saveError ] = useState(false);

    //extract state values
    const { brand, year, plan } = data;

    //read the data of form and pass to state
    const getInformation = e => {
        saveData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    //when the user press submit
    const quoteInsurance = e => {
        e.preventDefault();
        
        if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            saveError(true);
            return;
        }

        saveError(false);

        //a base of 2000
        let result = 2000;

        //get the difference of years
        const difference = getDifferenceYear(year);
        
        //for every year rest the 3%
        result -= ((difference * 3) * result) / 100;
        //console.log(result);


        //American 15%
        //Asian 5%
        //European 30%
        result = calculateBrand(brand) * result;
        //console.log(result);

        //basic increases
        //complete 50%
        const incrementPlan = getPlan(plan);
        result = parseFloat( incrementPlan * result ).toFixed(2);
        
        saveLoading(true);

        setTimeout(() => {
            //elimina el spinner
            saveLoading(false);
             
            //pasa la informacion al componente principal
            saveSummary({
                quotation: result,
                data
            });
        }, 3000);

        
    }

    return ( 
        <form
            onSubmit={quoteInsurance}
        >
            { error ? <Error>All the fields are obligatory</Error> : null }

            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInformation}
                >
                    <option value="">Select</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInformation}
                >
                    <option value="">Select</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    check={plan === "basic"}
                    onChange={getInformation}
                /> Basic

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="complete"
                    check={plan === "complete"}
                    onChange={getInformation}
                /> Complete
            </Field>

            <Button type="submit">Quote</Button>
        </form>
     );
}
 
export default Form;