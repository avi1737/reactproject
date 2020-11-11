import React from 'react';
import styled from 'styled-components';

const topcard = styled.h1`
font-family:Verdana, Geneva, Tahoma, sans-serif;
font-weight:bold;
`;

const TopCard = (props)=>{
    return(
        <>
        <h2>{props.heading}</h2>
        </>
    )
}

export default TopCard;