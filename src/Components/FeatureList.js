import React from 'react';
import styled from 'styled-components';
import Feature from './Feature';

const featurelist = styled.div`
color:grey;
font-size:16px;
margin-top:20px;
`;

const FeatureList = (props) => {
    return(
        <>
        <featurelist>
            {props.features.map( (feature) => <Feature text = {feature}/>)}
        </featurelist>
        </>
    )
}

export default FeatureList;