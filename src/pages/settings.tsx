import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, H1, ListItems, PaperEl } from "../components/ui-elements";
import Header from "../components/header";
import React from "react";
import { constant } from "../config/lang";
import Footer from "../components/footer";
import { setLang } from "../config/redux/store";
import { SelectInput } from "../components/form-inputs";

const Settings = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const settingsList = [
        {
            listItemText:true,
            primaryTitle:"Language", 
            primaryDescName: state.lang,
            primaryDesc: ''
        }
    ]
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
            <ListItems class={'settings-list'} list={
                [
                    {
                        listItemText:true,
                        primaryTitle:"Language", 
                        // primaryDescName: list.filter(data=>data.id == state.lang)[0]?.value,
                        primaryDesc: <SelectInput list={list} value={state.lang} change={handleChange}/>
                    }, {
                        listItemText:true,
                        primaryTitle:"Language", 
                        // primaryDescName: list.filter(data=>data.id == state.lang)[0]?.value,
                        primaryDesc: <SelectInput list={list} value={state.lang} change={handleChange}/>
                    }
                ]
            }/>
            
                {/* <PaperEl content={(state?.bname !== '' && state?.gname  !== '') && <div className="result">
                    <H1 class="result-res" text={constant['flames'][state?.lang][state?.flames]} />
                <p><label className="res-label">{constant['lang'][state?.lang]?.bname}:</label> <b className="wrap-text">{state?.bname}</b></p>
                <p><label className="res-label">{constant['lang'][state?.lang]?.gname}:</label> <b className="wrap-text">{state?.gname}</b></p>
            </div> } /> */}
            
                {/* <img src={`../assets/img/${state?.flames}.gif`} height={200} width={200}/> */}
            <Footer back={'back'}/>
            </>
        } />
    </>
}
export default Settings