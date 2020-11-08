import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: block;
    font-size: 18px;
    padding: 10px 20px;
    margin: 0 auto;
    text-transform: uppercase;
    background: #526a72;
    border: none;
    cursor: pointer;
    outline: none;
    color: #fff;
`;

const Button = props => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
