import React, { useState } from "react";
import { Content, Grid, H1 } from "./ui-elements";
import { ButtonField, TextInput } from "./form-inputs";

const Form = (props) => {
    // const field = () => {
    //     return <Grid container content={
    //         <Grid item content={
    //             <TextInput />
    //         }/>
    //     }/>
    // }
    // const formHeader = (text) => {
    //     return <>
    //         <H1 text={text.text}/>
    //     </>
    // }
    const wrapper = (section) => {
        return <>
            <H1 text={section?.sectionHeader} class={section?.class}/>
            {section?.fields?.map(data=>{
                console.log(data)
                // formHeader(data?.sectionHeader);
                // data.fields?.map(field=>{
                    console.log(data)
                    return fieldInputs(data);
                // })
            })}
        </>
    }
   
    const [formValues, setFormValues] = useState({})
    props.formValues(formValues)
    const fieldInputs = (input) => {
        console.log(formValues)
        switch(input.type) {
            case "text":
                return <TextInput type={input?.type} placeholder={input?.placeholder} label={input?.label} change={(e)=>
                    setFormValues({...formValues, [input?.name]: e?.target?.value })
                }/>
            break;
            case "button":
                return <ButtonField text={input?.value} click={input?.click}/>
            break;
            default:
                return <TextInput type={input?.type} placeholder={input?.placeholder} label={input?.label} change={input?.change}/>
        }
    }
    return <>
        <Content content={
            <>
                {props.formfields.map(section=>{
                    return wrapper(section)
                })}
            </>
        } className={'form-group'}/>
    </>
}
export default Form;