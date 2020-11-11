import React,{Component} from 'react'
import Button from './Button'
import TopCard from './TopCard'
import styled from 'styled-components'
import FeatureList from './FeatureList'

const Price = styled.div`
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-size:25px;
font-weight:bold;
background-color:orange;
padding:5px 10px;
border-radius:8px;
`;

const CardBox = styled.div`
background-color:white;
width:240px;
height:auto;
display:flex;
align-items:center;
flex-direction:column;
border-radius:8px;
padding:20px;
&:hover  {
    box-shadow:0 0 8px white;
  }
`;



const Card = (props) => {
    return(
        <>
        <CardBox>
        <TopCard heading = {props.data.heading}/>
        <Price primary>{props.data.Price}</Price>
        <FeatureList features = {props.data.features}></FeatureList> 
        <Button buttontxt = {props.data.buttontxt}/> 
        </CardBox>
        </>
    );
}

export default Card;