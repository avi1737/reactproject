import React from 'react'
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const Pakage = styled.div`
width:400px;
height:auto;
border-radius:6px;
padding:15px;
`;

const SignInText = styled.h1`
font-family:fantasy;
display:block;
padding:6px 14px;
border-radius:10px;
font-size:30px;
text-align:center;
`;

const Label =styled.p`
font-size:16px;
color:black;
font-family:fantasy;
`;

const InputBox = styled.input`
background-color:white;
color:black;
padding:10px 5px;
border:1px solid #2e3131;
width:90%;
border-radius:6px;
`;

const Service = styled.span`
font-size:14px;
color:grey;
line-height:10px;
`;

const SignInButton = styled.button`
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%);
padding:12px 20px;
width:90%;
font-family:fantasy;
outline:0;
border:none;
border-radius:50px;
margin-top:5%;
color:white;
cursor: pointer;
`;


class Form extends React.Component{

    render(){
        return(
            <>
            <Pakage>
            <SignInText>Log In</SignInText>
            
            <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="Your Email"
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          placeholder="Your Password"
          helperText=""
          fullWidth
          margin="normal"
          type="password"
          InputLabelProps={{
            shrink: true,
          }}
        />
           
            <Checkbox></Checkbox>
            <Service>I agree all terms and conditions that are applicable.</Service>
            <SignInButton>Sign in</SignInButton>
            </Pakage>
            
            </>
        )
    }
}

export default Form;