import { submit } from '../redux-configs/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { constant, clickSound } from '../redux-configs/constant';
import TextField from '@mui/material/TextField';
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
    if (gname.trim().length > 4 && gname.trim().length < 21 && 
          gname.trim().length > 4 && gname.trim().length) {
            if (gname?.trim() !== '' && bname?.trim() !== '') {
              // let gname1 = gname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              // let bname1 = bname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              // console.log(gname1,bname1)
              dispatch(submit({'gname':gname?.trim(),'bname':bname?.trim()}));
            }
    } else {
      alert(constant['lang'][state.lang].error)
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
            </Grid>
          <Footer submit={()=>submitNames()} inputs={{'gname':gname, 'bname':bname}}/>
        </Container>
      </>
    )
  }
  
  export default Form