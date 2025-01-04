import './App.css'
import Form from './components/form'
import Result from './components/result'
 import { useSelector, useDispatch } from 'react-redux';
 import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { setTheme } from './redux-configs/store'
function App() {
const state:any = useSelector((state)=>state);
const dispatch = useDispatch();
  useEffect(()=>{
    // console.log(state)
    dispatch(setTheme(state.flames))
  },[state.flames])
  return (
    <>
      <Container fixed>
          {(state.page == 0) && <Form className="Form"/>}
          {(state.page == 1) && <Result className="Form"/>}
      </Container>
    </>
  )
}

export default App
