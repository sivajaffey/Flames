import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, H1, PaperEl } from "../components/ui-elements";
import Header from "../components/header";
import React from "react";
import { constant } from "../config/lang";
import Footer from "../components/footer";
import { setHistoryList, setUserNames } from "../config/redux/store";
import { useLocation, useParams } from "react-router-dom";
import { ButtonField } from "../components/form-inputs";
import { textAlign } from "@mui/system";
import { FormatAlignJustify } from "@mui/icons-material";

const Result = (props) => {
    const getLocation = useLocation();
    const {data} = useParams();
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const styleVisitBtn = {
        'text-align': 'center',
        'justify-self': 'anchor-center',
        'position': 'absolute',
    }
     const style = {
                background:constant['themes'][state.theme]?.primaryColor,
                color:constant['themes'][state.theme]?.secondaryColor,
                "border-radius":"5%",
                "padding-bottom": "10%",
            }
    const openWebPage = (param:string) => {
        let {gname, bname, flames, theme} = state
        let data = btoa(JSON.stringify({bname:bname, gname:gname, flames:flames, theme: theme}))
        window.open((param == '0') ? `https://${constant.webAppUrl}/result/${data}` : `https://play.google.com/store/apps/details?id=com.sr.flamesapp`,"_blank")
    }
    useEffect(()=>{
        console.log(data)
        if (data) {
            let param = JSON.parse(atob(data));
            if (param?.gname && param?.bname && param?.flames && param?.theme) {
                dispatch(setUserNames({bname:param?.bname, gname:param?.gname, flames:param?.flames, theme: param?.theme}))
            }
        }
        if (!data) {
            if (state?.flames !== '') {
                playSounds(state?.flames)
            }
            if (localStorage && localStorage.getItem('historyData')) {
                dispatch(setHistoryList(JSON.parse(localStorage.getItem('historyData'))))
            }
        }
    },[])
    return <>
        <Content style={style} content={
            <>{getLocation.pathname == '/' &&  <Header /> }
                <PaperEl style={style} content={(state?.bname !== '' && state?.gname  !== '') && <div className="result">
                    <H1 class="result-res" text={constant['flames'][state?.lang][state?.flames]} />
                <p><label className="res-label">{constant['lang'][state?.lang]?.bname}:</label> <b className="wrap-text">{state?.bname}</b></p>
                <p><label className="res-label">{constant['lang'][state?.lang]?.gname}:</label> <b className="wrap-text">{state?.gname}</b></p>
            </div> } />
                <img src={`${ (constant['themes'][state?.theme]?.themeflames[state?.flames]?.background) ? constant['themes'][state?.theme]?.themeflames[state?.flames]?.background : '../assets/img/'+state?.flames+'.gif'}`} height={200} width={200} style={{
                    borderRadius: '50%', 
                    position: 'relative'}}/> 
                {getLocation.pathname == '/' && <Footer back={'back'}/>}
             {getLocation.pathname == '/' &&  <div>
                <ButtonField click={()=>openWebPage('0')} style={styleVisitBtn} variant="contained" text={<span className='front'>{constant['lang'][state.lang]?.share}</span>} />
            </div> }
            </>
        } />
        {getLocation.pathname !== '/' &&  
        <div>
            <ButtonField click={()=>openWebPage('1')} style={styleVisitBtn} variant="contained" text={<span className='front'>{constant['lang'][state.lang]?.download}</span>} />
        </div> }
    </>
}
export default Result