import { useSelector } from "react-redux";
import React from "react";
import Home from '../pages/home'
import Result from '../pages/result'
import Settings from '../pages/settings';
import CustomFlames from '../pages/customFlames';

const CustomRoute = (props) => {
const state:any = useSelector((state)=>state);
 return <>
   {state?.page === 0 && <Home />}
   {state?.page === 1 && <Result />}
   {state?.page === 2 && <Settings />}
   {state?.page === 3 && <CustomFlames />}
 </>
}

export default CustomRoute;