import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, ListItems } from "../components/ui-elements";
import React from "react";
import Footer from "../components/footer";
import { setLang, setTheme } from "../config/redux/store";
import { SelectInput } from "../components/form-inputs";
import { constant } from "../config/lang";

const Settings = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const setLanguage = (e:any) => {
            dispatch(setLang(e));
        }   
        const handleChange = (event: any) => {
            localStorage.setItem('lang',event.target.value)
            setLanguage(event.target.value)
        };
        const handleTheme = (event: any) => {
            localStorage.setItem('theme',event.target.value)
            dispatch(setTheme(event.target.value))
        }
        const list = [
            {id: 'en', value:'English'},
            {id: 'span', value:'Spanish'},
            {id: 'fr', value:'French'},
        ]
        const themeList = [
            {id: 'basic', value:'Basic'},
            {id: 'lite', value:'Lite'},
        ]
    useEffect(()=>{
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
    },[])
    return <>
        <Content content={
            <>
            <ListItems class={'settings-list'} list={
                [
                    {
                        listItemText:true,
                        primaryTitle:constant?.lang[state?.lang]?.langHeader, 
                        primaryDesc: <SelectInput list={list} value={state.lang} change={handleChange} class={'settings-menu'}/>
                    }, 
                    {
                        listItemText:true,
                        primaryTitle:constant?.lang[state?.lang]?.themeSelect, 
                        primaryDesc: <SelectInput list={themeList} value={state.theme} change={handleTheme} class={'settings-menu'}/>
                    },
                ]
            }/>
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default Settings