import React from 'react';
import { TextField } from '@mui/material';

export const H1 = (props) => {
    return <h1 className={props.class ? props.class : ''}>{props.text}</h1>
}

export const AppBar = (props) => {
    return <TextField autoComplete={props.autoComplete ? props.autoComplete : 'off'} id="outlined-basic" label={props.label} variant={props.variant ? props.variant : "outlined"}  type={props.type ? props.type : "text"} placeholder={props.placeholder ? props.placeholder : "...."} onKeyUp={(e)=> props.onKeyUp(e.target?.value)}/>
}

