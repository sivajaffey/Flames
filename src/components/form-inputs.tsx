import { Select, MenuItem, TextField, Button } from '@mui/material';
import React from 'react';

export const ButtonField = (props) => {
    return <Button className={props.class ? props.class : 'submit-btn pushable'} variant={props.variant ? props?.variant : "contained"} onClick={props?.click}>
                <span className={props?.subclass ? props?.subclass : 'front'}>{props?.text}</span>
            </Button>
}

export const TextInput = (props) => {
    return <TextField className={props?.class} autoComplete={props.autoComplete ? props.autoComplete : 'off'} id="outlined-basic" label={props.label} variant={props.variant ? props.variant : "outlined"}  type={props.type ? props.type : "text"} placeholder={props.placeholder ? props.placeholder : "...."} onChange={(e)=> props?.change(e)}/>
}

export const SelectInput = (props) => {
    return <Select className={props.class ? props?.class : 'lang-select'} onChange={props?.change} value={props?.value} >
                {props.list.map(data=>{
                    return <MenuItem value={data.id}>{data.value}</MenuItem>
                })}
            </Select>
}

