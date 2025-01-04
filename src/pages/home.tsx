import { useState } from "react";
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
  const [bname, setBname] = useState('');
  const [gname, setGname] = useState('');
  const dispatch = useDispatch();
  const state:any = useSelector(state=>state);
  const [formValue, setFormValues] = useState();
  const form = [
    {
        sectionHeader:"Flames",
        fields:[
            {
                name:'bname',
                label:"Boy Name",
                placeholder:"Enter Boy name",
                type:"text",
            },{
                name:'gname',
                label:"Girl Name",
                placeholder:"Enter Girl name",
                type:"text",
            },{
                type:"button",
                value:"Submit",
                click:()=>{
                    console.log('click')
                }
            },
        ]
    }
  ]

  const submitNames = () => {
    clickSound();
    if (gname.trim().length > 4 && gname.trim().length < 21 && 
          gname.trim().length > 4 && gname.trim().length) {
            if (gname?.trim() !== '' && bname?.trim() !== '') {
              let gname1 = gname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
              let bname1 = bname?.replace(/[&\/\\#, +()$~%.@!%^&*_+='":*?<>{}]/g, '');
            //   console.log(gname1,bname1)
              dispatch(submit({'gname':gname1?.trim(),'bname':bname1?.trim()}));
            }
    } else {
      alert(constant['lang'][state.lang].error)
    }
  }
  
    return <>
        <Content content={
            <>
            <Header/>
            <Form formfields={form}/>
            <Footer />
        </>
        }/>

        {/* <Container fixed className='content'> */}
            
            {/* <Grid container spacing={1}>
              <Grid item xs={12}>
              <h3>{constant['lang'][state.lang].subtitle}</h3>
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete='off' id="outlined-basic" label={constant['lang'][state.lang].bname} variant="outlined"  type='text' placeholder={constant['lang'][state.lang].bnamePlc} onKeyUp={(e)=> setBname(e.target?.value)}/>
              </Grid>
              <Grid item xs={12}>
                <TextField autoComplete='off' id="outlined-basic" label={constant['lang'][state.lang].gname} variant="outlined"  type='text' placeholder={constant['lang'][state.lang].gnamePlc} onKeyUp={(e)=> setGname(e.target?.value)}/>
              </Grid>
            </Grid> */}
          {/* <Footer submit={()=>submitNames()} inputs={{'gname':gname, 'bname':bname}}/> */}
        {/* </Container> */}
      </>
}
export default Home;