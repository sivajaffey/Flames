import './App.css';


 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { setHistory, setLang, setTheme } from './config/redux/store'
import React from 'react';
import CustomRoute from './config/routes';
import { Route, Routes, useLocation } from 'react-router-dom';
import Result from './pages/result';


const App = () => {
  const state:any = useSelector((state)=>state);
  const dispatch = useDispatch();
  // const location = useLocation();
  useEffect(()=>{
    dispatch(setLang((localStorage.getItem('lang')) ? localStorage.getItem('lang') : state?.lang))
    dispatch(setTheme((localStorage.getItem('theme')) ? localStorage.getItem('theme') : state?.theme))
    dispatch(setHistory((localStorage.getItem('history')) ? Number(localStorage.getItem('history')) : state?.history))
    // console.log(location)
  },[])

  return (
    <>
      <Container fixed>
        <Routes>
          <Route path="/" element={<CustomRoute />} />
          <Route path="/:data" element={<Result />} />
        </Routes>
      </Container>
    </>
  )
}

export default App;
