import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSounds } from "../config/music";
import { Content, ListItems } from "../components/ui-elements";
import React from "react";
import Footer from "../components/footer";
import { setLang, setTheme, setPage } from "../config/redux/store";
import { ButtonField, SelectInput } from "../components/form-inputs";
import { constant } from "../config/lang";

const History = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setTimer(1)
        },1000)
    },[])

    const viewPage = ()=> {
        let getHistory = JSON.parse(localStorage.getItem('historyData')) || [];
        let listArr = []
        if (getHistory && getHistory?.length > 0) {
                listArr = getHistory.map(data=>{
                    return {
                        listItemText:true,
                        primaryTitle:`${constant?.lang[state?.lang]?.bname} : ${data?.bname}, ${constant?.lang[state?.lang]?.gname}: ${data?.gname}`, 
                        primaryDesc: `${constant?.flames[state?.lang][data?.flames]}`
                    }
                })
        }
        return <>
         {timer === 1 &&
            <Content content={
                <>
                {listArr?.length > 0 && <ListItems class={'settings-list'} list={listArr}/>}
                {listArr?.length === 0 && `${constant.lang[state?.lang].noData}`}
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
export default History