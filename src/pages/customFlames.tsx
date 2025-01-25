import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, ListItems } from "../components/ui-elements";
import Header from "../components/header";
import React from "react";
import Footer from "../components/footer";
import { setLang } from "../config/redux/store";
import { ButtonField, SelectInput } from "../components/form-inputs";
import { constant } from "../config/lang";

const CustomFlames = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);

    useEffect(()=>{

    },[])

    return <>
        <Content content={
            <><Header />
            
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default CustomFlames