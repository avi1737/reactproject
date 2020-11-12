import React from 'react';
import styled from 'styled-components';
import Form from './Form'; 

const Container = styled.div`
width:100%;
background-color:white;
height:100vh;
display:flex;
flex-direction:row;
`;

const LeftSide = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
padding:0px 40px;
flex-direction:column;
background-color: #ff7700;
`;

const Pakage = styled.div`
width:450px;
height:auto;
`;

const Header = styled.h1`
font-size:60px;
font-family:'Roboto';
line-height:10px;
color:white;
`;

const Info = styled.p`
font-size:22px;
font-family:'Roboto';
color:white;
`;

const Special = styled.span`
color:black;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`;

const RightSide = styled.div`
width:50%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

`;

class Login extends React.Component{

    render(){
        return(
            <>
            <Container>
            <LeftSide>
                <img src='/images/Car.png' width='300px' height='300px'></img>
                <Pakage>
                <Header>Built for <p>Raj Travels</p></Header>
                <Info><Special>rajtravels.io</Special> is a development platform inspired by the way you work. From open source to business, you can host and review code, manage <Special>Projects</Special>, and build software alongside <Special>50 million</Special> developers.</Info>
                </Pakage>
            </LeftSide>
            <RightSide>
                <Form/>
            </RightSide>
            </Container>
            </>
        )
    }
}

export default Login;