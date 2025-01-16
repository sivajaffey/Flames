import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Content, Grid, H1 } from "./ui-elements";
import { ButtonField, TextInput } from "./form-inputs";

const Form = (props) => {
    const [formValues, setFormValues] = useState({})
    const wrapper = (section) => {
        return <>
            
            <Content content={
                <><H1 text={section?.sectionHeader}/>
                {section?.fields?.map(data=>{
                    return <Grid container content={
                                <Grid item content={
                                    fieldInputs(data)
                                }/>
                            }/>
                })}</>
        }  class={section?.class}/> 
        </>
    }

    const formSubmitBtn = (input) =>{
        input.click(formValues)
    }
    const setFormData = () => {
        props.formData(formValues)
    }
    useEffect(()=>{console.log(formValues)
        props?.formData(formValues)
    },[formValues])
    const fieldInputs = (input) => {
        switch(input?.type) {
            case "text":
                return <TextInput class={input?.class} type={input?.type} placeholder={input?.placeholder} label={input?.label} change={(e)=> setFormValues({...formValues, [input?.name]: e?.target?.value }) }/>
            break;
            case "button":
                return <ButtonField class={input?.class} text={input?.value} click={()=>input?.click}/>
            break;
            case "submit":
                return <ButtonField class={input?.class} text={input?.value} click={()=>formSubmitBtn(input)}/>
            break;
            default:
                return <TextInput class={input?.class} type={input?.type} placeholder={input?.placeholder} label={input?.label} change={(e)=>
                    setFormValues({...formValues, [input?.name]: e?.target?.value })
                }/>
        }
    }
    return <>
        <Content  content={
            <>
                {props?.formfields.map(section=>{
                    return wrapper(section)
                })}
            </>
        } class={props.class}/>
    </>
}
export default Form;