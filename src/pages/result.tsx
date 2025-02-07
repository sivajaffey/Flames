import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, H1, PaperEl } from "../components/ui-elements";
import Header from "../components/header";
import React from "react";
import { constant } from "../config/lang";
import Footer from "../components/footer";
import { setHistoryList } from "../config/redux/store";

const Result = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
     const style = {
                background:constant['themes'][state.theme]?.primaryColor,
                color:constant['themes'][state.theme]?.secondaryColor,
                "border-radius":"5%"
            }
    useEffect(()=>{
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
        if (localStorage && localStorage.getItem('historyData')) {
            dispatch(setHistoryList(JSON.parse(localStorage.getItem('historyData'))))
        }
    },[])
    return <>
        <Content style={style} content={
            <><Header />
                <PaperEl style={style} content={(state?.bname !== '' && state?.gname  !== '') && <div className="result">
                    <H1 class="result-res" text={constant['flames'][state?.lang][state?.flames]} />
                <p><label className="res-label">{constant['lang'][state?.lang]?.bname}:</label> <b className="wrap-text">{state?.bname}</b></p>
                <p><label className="res-label">{constant['lang'][state?.lang]?.gname}:</label> <b className="wrap-text">{state?.gname}</b></p>
            </div> } />
                <img src={`../assets/img/${state?.flames}.gif`} height={200} width={200}/> 
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default Result