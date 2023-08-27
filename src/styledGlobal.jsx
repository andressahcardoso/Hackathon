// import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import 'typeface-roboto';

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    form {
        display: block;
    }

    select {  
        display: inline-block;
        width: 100%;
        border: none;
        outline: none;
    }

`