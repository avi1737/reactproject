import React,{Component} from 'react'
import styled from 'styled-components'

const PurchaseButton = styled.button`
background-color:dodgerblue;
color:white;
padding:10px 20px;
border:none;
font-family:fantasy;
outline:0;
font-weight:lighter;
margin-top:15px;
cursor: pointer;
background: ${props => props.primary ? "purple" : "dodgerblue"};

`;

const Button = (props) => {
    return(
        <>
        <PurchaseButton primary>{props.buttontxt[0]}</PurchaseButton>
        <PurchaseButton >{props.buttontxt[1]}</PurchaseButton>
        </>
    );
}

export default Button;