import React from 'react';
import styled from 'styled-components';

const HeadText = styled.h1`
text-align:center;
font-family:fantasy;
color:white;
`;

const HeadingSection = (props)=>{
    return(
        <>
        <HeadText>Our React Js</HeadText>
        </>
    )
}

export default HeadingSection;