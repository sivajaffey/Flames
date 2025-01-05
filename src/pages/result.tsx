import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, H1, PaperEl } from "../components/ui-elements";
import Header from "../components/header";
import React from "react";
import { constant } from "../config/lang";
import Footer from "../components/footer";

const Result = (props) => {
    // const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    useEffect(()=>{
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
    },[])
    return <>
        <Content content={
            <><Header />
                <PaperEl content={(state?.bname !== '' && state?.gname  !== '') && <div className="result">
                <p><label className="res-label">{constant['lang'][state?.lang]?.bname}:</label> <b className="wrap-text">{state?.bname}</b></p>
                <p><label className="res-label">{constant['lang'][state?.lang]?.gname}:</label> <b className="wrap-text">{state?.gname}</b></p>
            </div> } />
            <H1 class="result-res" text={constant['flames'][state?.lang][state?.flames]} />
            <img src={`../src/assets/img/${state?.flames}.gif`} height={200} width={200}/>
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default Result