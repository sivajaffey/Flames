import './App.css';


 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useCallback, useEffect } from 'react';
import { setLang, setTheme } from './config/redux/store'
import React from 'react';
import CustomRoute from './config/routes';


const App = () => {
  const state:any = useSelector((state)=>state);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(setLang((localStorage.getItem('lang')) ? localStorage.getItem('lang') : state?.lang))
  dispatch(setTheme((localStorage.getItem('theme')) ? localStorage.getItem('theme') : state?.theme))
},[])
useCallback(()=>{
    if (state.page == 0) {
        dispatch(setTheme((localStorage.getItem('theme')) ? localStorage.getItem('theme') : state?.theme))
    } else if (state.page !== 0 && state.page == 3){
      dispatch(setTheme(state?.flames))
    }
  },[state?.flames, state?.theme])

  useCallback(()=>{
   dispatch(setLang((localStorage.getItem('lang')) ? localStorage.getItem('lang') : state?.lang))
  },[state?.lang])
  return (
    <>
      <Container fixed>
          <CustomRoute />
      </Container>
    </>
  )
}

export default App;
