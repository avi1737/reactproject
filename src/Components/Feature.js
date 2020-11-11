import React from 'react';
import styled from 'styled-components';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const feature = styled.li`
color:dodgerblue;
padding:10px 0px;

`;

const Feature = (props) =>{
    return(
        <>
        <feature>
            <p>
            <span><DoneOutlineIcon/></span>
            {props.text}
            </p>
        </feature>
        </>
    );
}

export default Feature;