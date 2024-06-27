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
          {(state.page == 0) && <Form className="Form"/>}
          {(state.page == 1) && <Result className="Form"/>}
      </Container>
    </>
  )
}

export default App
