import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TipsCalculator from './components/TipsCalculator';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        color: #fff;
        margin: 0;
        background-color: #769aa4;
        font-size: 14px;
    }
`;

function App() {
    return <>
        <GlobalStyle />
        <TipsCalculator />
    </>
}

export default App;
