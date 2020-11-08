import React, { useState } from 'react';
import styled from 'styled-components';

import Form from './Form';
import Result from './Result';

const StyledContainer = styled.div`
    width: 400px;
    margin: 100px auto;
`;

const StyledTitle = styled.div`
    font-size: 20px;
    color: #fff;
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    text-transform: uppercase;
`;

const TipsCalculator = () => {
    const [ showResult, setShowResult ] = useState(false);
    const [ price, setPrice ] = useState(0);

    const titleText = showResult ? 'Final Price' : 'Tips calculator';

    const handlePriceCount = amount => {
        setShowResult(true);
        setPrice(amount);
    };

    const handleStartAgain = () => {
        setShowResult(false);
    };

    return (
        <StyledContainer>
            <StyledTitle>{titleText}</StyledTitle>
            {
                showResult ? <Result amount={price} onStartAgain={handleStartAgain} /> :
                <Form onPriceCount={handlePriceCount}/>
            }
        </StyledContainer>
    );
};

export default TipsCalculator;
