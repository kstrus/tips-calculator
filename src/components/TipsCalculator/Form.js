import React, { useState } from 'react';
import styled from 'styled-components';

import { VAT, CURRENCY } from '../../config';
import Button from './Button';

const StyledFormElement = styled.div`
    padding: 15px 0;
    border-bottom: 1px solid #fff;
`;

const StyledLabel = styled.label`
    display: inline-block;
    width: 120px;
    text-transform: uppercase;
`;

const InputStyles = `
    width: 280px;
    border: none;
    outline: none;
    padding: 5px 10px;
    color: #526a72;
`;

const StyledInput = styled.input`
    ${InputStyles}
`;

const StyledSelect = styled.select`
    ${InputStyles}
`;

const StyledInfoWrapper = styled.div`
    margin: 20px 0 40px;
`;

const StyledInfo = styled.div`
    text-align: right;
    margin-bottom: 5px;
`;

const calculatePrice = (net, tip) => {
    const gross = (1 + VAT / 100) * net;

    return (1 + tip / 100) * gross;
};

const Form = ({ onPriceCount }) => {
    const [ netPrice, setNetPrice ] = useState(0);
    const [ tip, setTip ] = useState(5);

    const handleSubmit = e => {
        e.preventDefault();

        onPriceCount(calculatePrice(netPrice, tip));
    };

    return (
        <form onSubmit={handleSubmit}>
            <StyledFormElement>
                <StyledLabel htmlFor="netAmount">Net total</StyledLabel>
                <StyledInput type="number" name="netAmount" id="netAmount" value={netPrice} onChange={e => setNetPrice(parseFloat(e.target.value))} />
            </StyledFormElement>

            <StyledFormElement>
                <StyledLabel htmlFor="tipAmount">Tip amount</StyledLabel>
                <StyledSelect name="tipAmount" id="tipAmount" onChange={e => setTip(parseFloat(e.target.value))}>
                    <option value="5">5%</option>
                    <option value="10">10%</option>
                    <option value="15">15%</option>
                    <option value="20">20%</option>
                </StyledSelect>
            </StyledFormElement>

            <StyledInfoWrapper>
                <StyledInfo>VAT value is {VAT}%</StyledInfo>
                <StyledInfo>All prices in {CURRENCY}</StyledInfo>
            </StyledInfoWrapper>

            <Button type="submit">Get final price</Button>
        </form>
    )
};

export default Form;
