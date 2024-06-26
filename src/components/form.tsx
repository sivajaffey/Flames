import { submit } from '../redux-configs/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { constant, clickSound } from '../redux-configs/constant';


import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Divider from '@mui/material/Divider';
// import CardContent from '@mui/material/CardContent';
// import { CardActionArea } from '@mui/material';
// import ManIcon from '@mui/icons-material/Man';
// import WomanIcon from '@mui/icons-material/Woman';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Header from '../components/header';
import Footer from '../components/footer';
import Grid from '@mui/material/Grid';

const Form = () => {
  const [bname, setBname] = useState('');
  const [gname, setGname] = useState('');
  const dispatch = useDispatch();
  const state:any = useSelector(state=>state);
  const submitNames = () => {
    clickSound();
    if (gname !== '' && bname !== '') {
      dispatch(submit({'gname':gname,'bname':bname, 'dispatch':dispatch}));
    }
  }
    return (
      <>
        <Container fixed className='content'>
            <Header/>
            <Grid container spacing={1}>
              <Grid item xs={12}>
              <h3>{constant['lang'][state.lang].subtitle}</h3>
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete='off' id="outlined-basic" label={constant['lang'][state.lang].bname} variant="outlined"  type='text' placeholder={constant['lang'][state.lang].bnamePlc} onKeyUp={(e)=> setBname(e.target?.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete='off' id="outlined-basic" label={constant['lang'][state.lang].gname} variant="outlined"  type='text' placeholder={constant['lang'][state.lang].gnamePlc} onKeyUp={(e)=> setGname(e.target?.value)}/>
              </Grid>
              <Grid item xs={12}>
                {/* <div>
                  Loading...
                </div>
                <div>
                    <span ><img className={'loading-animation'} src={'../src/assets/img/b1.jpg'} height={20} width={20}/></span>
                    <span><img className={'loading-animation'} src='../../src/assets/img/b3.jpg' height={20} width={20}/></span>
                    <span><img className={'loading-animation'} src='../../src/assets/img/b4.jpg' height={20} width={20}/></span>
                    <span><img className={'loading-animation'} src='../../src/assets/img/b2.jpg' height={20} width={20}/></span>
                </div> */}
              </Grid>
            </Grid>
          <Footer submit={()=>submitNames()} inputs={{'gname':gname, 'bname':bname}}/>
        </Container>
      </>
    )
  }
  
  export default Form