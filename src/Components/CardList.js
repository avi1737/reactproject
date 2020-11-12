import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import HeadingSection from './HeadingSection';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
margin-top:50px;
gap:30px;
`;

const data = [
    {
        'heading':"Basic Plan",
        'Price':'45$',
        'features':[
            'very fast',
            'Less Time Consuming',
            '24 hr support'
        ],

        'buttontxt':['Try For 15 Days',
        'Buy Now']
    },
    {
        'heading':"Saving Plan",
        'Price':'60$',
        'features':[
            'Assistant Support',
            '15 GB More Data',
            'Better Color Quality'
        ],
        
        'buttontxt':['Try For 15 Days',
        'Buy Now']
    },
    {
        'heading':"Premium Plan",
        'Price':'120$',
        'features':[
            'No 1 in Market',
            'Unlimited Data',
            'Best Performance'
        ],
        
        'buttontxt':['Try For 15 Days',
        'Buy Now']
    },

];

const CardList = ()=>{
    return(
        <>
        <Container>
        <HeadingSection/>
        {data.map((data) => <Card data = {data}/> )}
        </Container>
        </>
    )
}

export default CardList;