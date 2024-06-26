import './App.css'
import Form from './components/form'
import Result from './components/result'
 import { useSelector} from 'react-redux';
 import Container from '@mui/material/Container';
function App() {
const state:any = useSelector((state)=>state);

  return (
    <>
      <Container fixed>
          {(state.bname == '' && state.gname  == '') && <Form className="Form"/>}
          {(state.bname !== '' && state.gname  !== '') && <Result className="Form"/>}
      </Container>
    </>
  )
}

export default App
