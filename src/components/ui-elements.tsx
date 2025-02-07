import React from 'react';
import { TextField, Container, Grid2, AppBar, Toolbar, List, ListItemAvatar, Avatar, Typography, ListItemText, ListItem, Divider, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { constant } from '../config/lang';
import { useSelector } from 'react-redux';

export const H1 = (props) => {
    return <h1 className={props?.class}>{props?.text}</h1>
}
export const H4 = (props) => {
    return <h4 {...props} className={props?.class}>{props?.text}</h4>
}

export const textInput = (props) => {
    return <TextField autoComplete={props?.autoComplete ? props?.autoComplete : 'off'} id="outlined-basic" label={props?.label} variant={props?.variant ? props.variant : "outlined"}  type={props?.type} placeholder={props?.placeholder} onKeyUp={(e)=> props?.keyup(e)}/>
}

export const Content = (props) => {
    return <Container {...props} className={props?.class}>{props?.content}</Container>
}

export const Grid = (props) => {
    return <Grid2 className={props?.class}>{props?.content}</Grid2>
}

export const NavBar = (props) => {
    return <AppBar className={props?.class}>{props?.content}</AppBar>
}

export const NavToolBar = (props) => {
    return <Toolbar {...props} className={props?.class}>{props?.content}</Toolbar>
}

export const PaperEl = (props) => {
    // return <Paper className={props?.class}>
        return props?.content
        {/* </Paper> */}
}

export const Paragraph = (props) => {
    return <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
                {...props}
            >
            {props?.desc}
    </Typography>
}

export const ListItems = (props) => {
    let listArr = props?.list
    return <List sx={props?.sx} className={props?.class}>
        {listArr?.length > 0 ? listArr?.map(item=>{
            return <>
                <ListItem alignItems="flex-start" className={item?.class}>
                    {item?.avatar && 
                        <ListItemAvatar className={item?.headerClass}>
                            <Avatar alt={item?.alt} src={item?.AvatarSrc} className={item?.avatarClass}/>
                        </ListItemAvatar>
                    }
                    {item?.listItemText &&
                        <ListItemText
                        className={item?.listClass}
                        primary={item?.primaryTitle}
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {item?.primaryDescName}
                            </Typography>
                            {item?.primaryDesc}
                            </React.Fragment>
                        }
                        />
                    }
                </ListItem>
                <Divider variant="inset" component="li" />
            </>
        }) : []}
    </List>
}

export const Loader = (props) => {
    const state:any = useSelector((state)=>state);
    return <>
        <Card style={{background: constant.themes[state.theme].background}} className={props.className} variant="outlined">
            <CardContent>
            {props?.image && <Typography justifyItems={'center'} textAlign='center' gutterBottom variant="h4" component="div">
                <CardMedia
                sx={{ height: 140 }}
                image={props?.image}
            />
            </Typography>}
            {props?.title && <Typography style={{color: constant.themes[state?.theme]?.secondaryColor}} className='blink'  textAlign='center' gutterBottom variant="h4" component="div">
            {props?.title}
            </Typography>}
            {props?.message && <Typography style={{color: constant.themes[state?.theme]?.primaryColor, fontStyle:'italic'}} textAlign='center' gutterBottom variant="h5" component="div">
            {props?.message}
            </Typography>}
            </CardContent>
            {props?.action && <CardActions>
                {props?.action}
            </CardActions>}
        </Card>
    </>
}
