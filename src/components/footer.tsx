import { useDispatch, useSelector } from "react-redux";
import { clickSound } from "../config/music";
import { clearData } from "../config/redux/store";
import React from "react";
import { ButtonField } from "./form-inputs";
import { constant } from "../config/lang";

const Footer = (props) => {
    const state:any = useSelector(state=>state);
    const dispatch = useDispatch();
    const style = {
        background:constant['themes'][state.theme]?.secondaryColor,
        color:constant['themes'][state.theme]?.primaryColor,
        margin:"2px",
        width: "100%"
    }
    const clear = () => {
        clickSound();
        dispatch(clearData());
    }
    const clearHistory = () => {
        localStorage.removeItem('historyData');
        clear()
    }
    return <>
        <div className="footer">
            {state.page == 2 && 
                <>
                    <h6 style={{ bottom: '0%', position: 'fixed', background: style.background, color: style.color, "border-radius": "5%" }}>
                    <i>Version : {constant.version}</i>&nbsp;
                    ( <a target="_blank" href="https://sivaraman.business.blog/">Developer</a> ) 
                    </h6> 
                </>
            }
            {state?.page === 4 && <ButtonField style={style} click={()=>clearHistory()} text={constant.lang[state?.lang].clear} />}
            {props?.back == 'back' ? <ButtonField style={style} className='submit-btn pushable' variant="contained" click={()=>clear()} text={<span className='front'>{constant['lang'][state.lang].goBack}</span>}/> : 
            <ButtonField className='submit-btn pushable' style={style} variant="contained" click={props.submit} text={<span className='front'>{constant['lang'][state.lang].submitBtn}</span>} />}
        </div>
    </>
}
export default Footer;