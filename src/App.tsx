import './App.css';


 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { setTheme } from './config/redux/store'
import React from 'react';
import CustomRoute from './config/routes';


const App = () => {
  const state:any = useSelector((state)=>state);
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setTheme(state?.flames))
  },[state?.flames])
  return (
    <>
      <Container fixed>
          <CustomRoute />
      </Container>
    </>
  )
}

export default App;
