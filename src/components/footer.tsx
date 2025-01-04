import { useDispatch, useSelector } from "react-redux";
import { clickSound } from "../config/music";
import { clearData } from "../config/redux/store";
import React from "react";
import { ButtonField } from "./form-inputs";
import { constant } from "../config/lang";

const Footer = (props) => {
    const state:any = useSelector(state=>state);
    const dispatch = useDispatch();
    const clear = () => {
        clickSound();
        dispatch(clearData());
    }
    return <>
        <div className="footer">
            {props?.back == 'back' ? <ButtonField className='submit-btn pushable' variant="contained" click={()=>clear()} text={<span className='front'>{constant['lang'][state.lang].goBack}</span>}/> : 
            <ButtonField className='submit-btn pushable' variant="contained" click={props.submit} text={<span className='front'>{constant['lang'][state.lang].submitBtn}</span>} />}
        </div>
    </>
}
export default Footer;