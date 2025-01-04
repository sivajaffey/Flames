import { useDispatch, useSelector } from "react-redux";
import { constant, playSounds } from "../redux-configs/constant";
import Header from '../components/header';
import Footer from '../components/footer';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { setFlames } from "../redux-configs/store";
function Result() {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    useEffect(()=>{
        console.log(state?.flames)
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
    },[])
    return (
        <Container fixed className='content'>
            <Header />
            <Paper elevation={3}>
            {(state?.bname !== '' && state?.gname  !== '') && <div className="result">
                <p><label className="res-label">{constant['lang'][state?.lang]?.bname}:</label> <b className="wrap-text">{state?.bname}</b></p>
                <p><label className="res-label">{constant['lang'][state?.lang]?.gname}:</label> <b className="wrap-text">{state?.gname}</b></p>
            </div> }
            </Paper>
            <h1 className="result-res">{constant['flames'][state?.lang][state?.flames]}</h1>
            <img src={`../src/assets/img/${state?.flames}.gif`} height={200} width={200}/>
            <Footer back={'back'}/>
        </Container>
    )
}

export default Result;