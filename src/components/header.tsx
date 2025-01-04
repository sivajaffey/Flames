import React from "react";
import { constant } from "../config/lang";
import { SelectInput } from "./form-inputs";
import { H1, NavBar, NavToolBar } from "./ui-elements";
import { setLang } from "../config/redux/store";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const state:any = useSelector((state)=>state);
    const dispatch = useDispatch();
    const setLanguage = (e:any) => {
        dispatch(setLang(e));
    }   
    const handleChange = (event: any) => {
        setLanguage(event.target.value)
    };
    const list = [
        {id: 'en', value:'English'},
        {id: 'span', value:'Spanish'},
        {id: 'fr', value:'French'},
    ]
    return  <NavBar content={
            <NavToolBar content={<>
                <H1 text={constant['lang'][state.lang].title}/>
                <SelectInput list={list} value={state.lang} change={handleChange}/></>
            }/>
        } />
}
export default Header;