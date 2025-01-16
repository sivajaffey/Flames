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
    useEffect(()=>{
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
    },[])
    return <>
        <Content content={
            <><Header />
            {/* <ListItems class={'settings-list'} list={
                [
                    {
                        listItemText:true,
                        primaryTitle:"Language", 
                        primaryDesc: <SelectInput list={list} value={state.lang} change={handleChange} class={'settings-menu'}/>
                    }, {
                        listItemText:true,
                        primaryTitle:"Language", 
                        primaryDesc: <ButtonField text={constant.lang[state.lang]?.customFlames}/>
                    },
                ]
            }/> */}
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default CustomFlames