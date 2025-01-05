import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSound } from "../config/music";
import { constant } from "../config/lang";
import { submit } from "../config/redux/store";
import { Content } from "../components/ui-elements";
import React from 'react';
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
const Home = () => {
  const dispatch = useDispatch();
  const state:any = useSelector((state)=>state);
  const [formValue, setFormValues] = useState();
  // useEffect(()=>{
  //   console.log(formValue)
  // },[formValue])
  const form = [
    {
        sectionHeader:"Flames",
        class:"flames-form",
        fields:[
            {
                name:'bname',
                label:"Boy Name",
                placeholder:"Enter Boy name",
                type:"text",
                class:"bname"
            },{
                name:'gname',
                label:"Girl Name",
                placeholder:"Enter Girl name",
                type:"text",
            },
            // {
            //     type:"submit",
            //     value:"Submit",
            //     click:(e)=>{
            //         // setBname(e.bname);
            //         // setGname(e.gname);
            //         submitNames(e);
            //     }
            // },
        ]
    }
  ]

  const submitNames = (e) => {
    clickSound();
    if (e?.gname?.trim().length > 4 && e?.gname?.trim()?.length < 21 && 
    e?.gname?.trim()?.length > 4 && e?.gname?.trim()?.length) {
            if (e.gname?.trim() !== '' && e.bname?.trim() !== '') {
              // let gname1 = e.gname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              // let bname1 = e.bname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              dispatch(submit({'gname':e.gname?.trim(),'bname':e.bname?.trim()}));
            }
    } else {
      alert(constant['lang'][state.lang].error)
    }
  }
  
    return <>
        <Content content={
            <>
            <Header/>
              <Form formfields={form} formData={(e)=>setFormValues(e)}/>
            <Footer submit={()=>submitNames(formValue)}/>
        </>
        }/>
      </>
}
export default Home;