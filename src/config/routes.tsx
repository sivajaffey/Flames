import { useSelector } from "react-redux";
import React from "react";
import Home from '../pages/home'
import Result from '../pages/result'
import Settings from '../pages/settings';
import History from '../pages/history';
import CustomFlames from '../pages/customFlames';
import Header from "../components/header";

const CustomRoute = (props) => {
const state:any = useSelector((state)=>state);
const Router = [
  {id : 0 , component: <Home /> },
  {id : 1 , component: <Result /> },
  {id : 2 , component: <Settings /> },
  {id : 3 , component: <CustomFlames /> },
  {id : 4 , component: <History /> },
]
 return <>
  <Header />
   {Router.filter(route=>route.id == state?.page).length > 0 ? Router.filter(route=>route.id == state?.page)[0].component : 'No Page Found'}
 </>
}

export default CustomRoute;