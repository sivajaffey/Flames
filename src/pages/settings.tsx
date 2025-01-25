import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, ListItems } from "../components/ui-elements";
import React from "react";
import Footer from "../components/footer";
import { setLang, setTheme, setPage, setHistory } from "../config/redux/store";
import { SelectInput } from "../components/form-inputs";
import { constant } from "../config/lang";

const Settings = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const [vwHis, setView] = useState(JSON.parse(localStorage.getItem('historyData')) || [])
    const [timer, setTimer] = useState(0);
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

        const turnHistory = (e) => {
            localStorage.setItem('history',e.target.value)
            dispatch(setHistory(e?.target?.value))
        }

        const list = () => {
            return Object.keys(constant?.lang).map((key,i)=>{
                return {
                    id: key,
                    value: constant?.lang[key].lang
                }
            })
        }

        const getThemeList = () => {
            return Object.keys(constant?.lang[state?.lang]?.theme).map((key,i)=>{
                return {
                    id: key,
                    value: constant?.lang[state?.lang]?.theme[key]
                }
            })
        }
    
    useEffect(()=>{
        if (state?.flames !== '') {
            playSounds(state?.flames)
        }
        setTimeout(()=>{
            setTimer(1)
        },1000)
    },[])

    const viewPage = ()=> {
        return <>
         {timer === 1 &&
            <Content content={
                <>
                <ListItems class={'settings-list'} list={
                    [
                        {
                            listItemText:true,
                            primaryTitle:constant?.lang[state?.lang]?.langHeader, 
                            primaryDesc: <SelectInput list={list()} value={state?.lang} change={handleChange} class={'settings-menu'}/>
                        }, 
                        {
                            listItemText:true,
                            primaryTitle:constant?.lang[state?.lang]?.themeSelect, 
                            primaryDesc: <SelectInput list={getThemeList()} value={state?.theme} change={handleTheme} class={'settings-menu'}/>
                        },
                        {
                            listItemText:true,
                            primaryTitle:<>
                                {constant?.lang[state?.lang]?.history} {vwHis.length > 0 && <span style={{'color':'blue'}} onClick={()=>dispatch(setPage(4))}>(<u >{constant?.lang[state?.lang]?.view}</u>)</span>}
                            </>, 
                            primaryDesc: <SelectInput list={[
                                {id:1, value: constant.lang[state?.lang].on},
                                {id:0, value: constant.lang[state?.lang].off}
                            ]} value={state?.history} change={turnHistory} class={'settings-menu'}/>
                        },
                    ]
                }/>
                <Footer back={'back'}/>
                </>
            } />
        }
        {timer === 0 && <div>
            {constant?.lang[state?.lang]?.loading}
        </div>}
        </>
    }
    return <>
        {viewPage()}
    </>
}
export default Settings