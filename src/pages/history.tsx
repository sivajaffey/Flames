import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Content, H1, H4, H6, ListItems, Paragraph } from "../components/ui-elements";
import React from "react";
import Footer from "../components/footer";
import { constant } from "../config/lang";

const History = (props) => {
    const dispatch = useDispatch();
    const state:any = useSelector((state)=>state);
    const [timer, setTimer] = useState(0);
    const style = {
                color:constant['themes'][state.theme]?.primaryColor,
                background:constant['themes'][state.theme]?.secondaryColor,
                border: `2px solid ${constant['themes'][state.theme]?.primaryColor}`,
                padding:"1%",
                "border-radius":"10px",
                width:"100%"
    }
    const styleDesc = {
        color:constant['themes'][state.theme]?.primaryColor,
        background:constant['themes'][state.theme]?.secondaryColor,
        border: `2px solid ${constant['themes'][state.theme]?.primaryColor}`,
        padding:"1%",
        "border-radius":"10px",
    }

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
                        primaryTitle:<H4 style={style} text={`${constant?.lang[state?.lang]?.bname} : ${data?.bname}, ${constant?.lang[state?.lang]?.gname}: ${data?.gname}`}/>, 
                        primaryDesc: <Paragraph style={styleDesc} desc={`${constant?.flames[state?.lang][data?.flames]}`} />
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