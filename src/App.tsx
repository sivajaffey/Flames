import './App.css';


 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { setHistory, setLang, setTheme } from './config/redux/store'
import React from 'react';
import CustomRoute from './config/routes';


const App = () => {
  const state:any = useSelector((state)=>state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setLang((localStorage.getItem('lang')) ? localStorage.getItem('lang') : state?.lang))
    dispatch(setTheme((localStorage.getItem('theme')) ? localStorage.getItem('theme') : state?.theme))
    dispatch(setHistory((localStorage.getItem('history')) ? Number(localStorage.getItem('history')) : state?.history))
    
  },[])

  return (
    <>
      <Container fixed>
          <CustomRoute />
      </Container>
    </>
  )
}

export default App;
