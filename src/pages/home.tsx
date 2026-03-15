import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSound } from "../config/music";
import { constant } from "../config/lang";
import { showLoader, submit } from "../config/redux/store";
import { Content } from "../components/ui-elements";
import React from 'react';
import Form from "../components/form";
import Footer from "../components/footer";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

const Home = () => {
  const dispatch = useDispatch();
  const state:any = useSelector((state)=>state);
  const [formValue, setFormValues] = useState();
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  const style = {
          background: constant['themes'][state?.theme]?.primaryColor,
          color:constant['themes'][state?.theme]?.secondaryColor,
          "padding-bottom": "2%",
          "padding-top": "1%",
          // "padding-left":"5%",
          "border-radius":"2%"
      }
  const form = [
    {
        // sectionHeader:"Flames",
        class:"flames-form",
        fields:[
            {
                name:'bname',
                label: constant.lang[state.lang].bname,
                placeholder:constant.lang[state.lang].bnamePlc,
                type:"text",
                class:"field-name"
            },{
                class:"field-name",
                name:'gname',
                label: constant.lang[state.lang].gname,
                placeholder:constant.lang[state.lang].gnamePlc,
                type:"text",
            },
        ]
    }
  ]

  const submitNames = (e) => {
    clickSound();
    // console.log("MAx: "+(e?.gname?.trim().length + e?.bname?.trim()?.length))
    // if ( (e?.gname?.trim().length + e?.bname?.trim()?.length) > 30) {
    //   alert(constant['lang'][state.lang].error)
    //   return false
    // }
    if (e?.gname?.trim().length > 4 && e?.gname?.trim()?.length < 21 && 
    e?.gname?.trim()?.length > 4 && e?.gname?.trim()?.length) {
            if (e.gname?.trim() !== '' && e.bname?.trim() !== '') {
              // let gname1 = e.gname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              // let bname1 = e.bname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              const submitFlames = (e) => {
                dispatch(submit({'gname':e.gname?.trim(),'bname':e.bname?.trim()}));
              }
              dispatch(showLoader({show:true, title: `${constant.lang[state.lang].calFlames}`, message: `${e.bname} & ${e.gname}`, image: (constant['themes'][state?.theme]?.flamesLoader) ? constant['themes'][state?.theme]?.flamesLoader : constant?.loaderImg?.flamesLoader})) // loader function start
              setTimeout(()=>{
                dispatch(showLoader({show:false, title: '', message: '', image: ''})) // loader function stop
                submitFlames(e)
              },5000)
            }
    } else {
      // alert(constant['lang'][state.lang].error)
      setMsg(constant['lang'][state.lang].error);
      handleClick();
      return false
    }
  }
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return <>
        <Content class={'home-page'} content={
            <>
              <Form class={'insert-form'} style={style} formfields={form} formData={(e)=>setFormValues(e)}/>
              <Footer class={'insert-form-footer'} submit={()=>submitNames(formValue)}/>
                <Snackbar
                  style={{top:"18%"}} //, background:constant['themes'][state?.theme]?.primaryColor, color:constant['themes'][state?.theme]?.secondaryColor
                  open={open}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                  // horizontal={'center'}
                  autoHideDuration={1200}
                  onClose={handleClose}
                  message={msg}
                />
             </>
        }/>
      </>
}
export default Home;