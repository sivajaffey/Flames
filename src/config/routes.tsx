import { useSelector } from "react-redux";
import { constant } from "./lang";

import Home from '../pages/home'
import Result from '../pages/result'
import Settings from '../pages/settings';
import CustomFlames from '../pages/customFlames';

const CustomRoute = (pageId) => {
const state:any = useSelector((state)=>state);
 const routes = [
    { id : 0 , component: Home},
    { id : 1 , component: Result},
    { id : 2 , component: Settings},
    { id : 3 , component: CustomFlames},
 ]
 return (routes.filter(page=>page.id == pageId).length > 0) ? routes.filter(page=>page.id == pageId)[0].component : constant?.lang[state.lang]?.customFlames;
}

export default CustomRoute;