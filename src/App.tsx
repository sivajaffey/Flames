import './App.css';

import Home from './pages/home'
import Result from './pages/result'
 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { setTheme } from './config/redux/store'
import React from 'react';

const App = () => {
  const state:any = useSelector((state)=>state);
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setTheme(state?.flames))
  },[state?.flames])
  return (
    <>
      <Container fixed>
          {(state.page == 0) && <Home/>}
          {(state.page == 1) && <Result/>}
      </Container>
    </>
  )
}

export default App;
