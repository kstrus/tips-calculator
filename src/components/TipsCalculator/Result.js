import React from 'react';
import styled from 'styled-components';

import { CURRENCY } from '../../config';
import Button from './Button';

const StyledResult = styled.div`
    font-size: 40px;
    padding: 50px 0;
`;

const Result = ({ amount, onStartAgain }) => {
    return (
        <>
            <StyledResult>{amount.toFixed(2)} {CURRENCY}</StyledResult>
            <Button onClick={onStartAgain}>Start again</Button>
        </>
    );
};

export default Result;
