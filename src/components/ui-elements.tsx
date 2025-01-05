import React from 'react';
import { TextField, Container, Grid2, AppBar, Toolbar, Paper } from '@mui/material';

export const H1 = (props) => {
    return <h1 className={props?.class}>{props?.text}</h1>
}

export const textInput = (props) => {
    return <TextField autoComplete={props?.autoComplete ? props?.autoComplete : 'off'} id="outlined-basic" label={props?.label} variant={props?.variant ? props.variant : "outlined"}  type={props?.type} placeholder={props?.placeholder} onKeyUp={(e)=> props?.keyup(e)}/>
}

export const Content = (props) => {
    return <Container className={props?.class}>{props?.content}</Container>
}

export const Grid = (props) => {
    return <Grid2 className={props?.class}>{props?.content}</Grid2>
}

export const NavBar = (props) => {
    return <AppBar className={props?.class}>{props?.content}</AppBar>
}

export const NavToolBar = (props) => {
    return <Toolbar className={props?.class}>{props?.content}</Toolbar>
}

export const PaperEl = (props) => {
    return <Paper className={props?.class}>{props?.content}</Paper>
}
