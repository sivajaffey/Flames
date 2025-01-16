import React from "react";
import { constant } from "../config/lang";
import { H1, NavBar, NavToolBar } from "./ui-elements";
import { setPage } from "../config/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from '@mui/icons-material';

const Header = () => {
    const state:any = useSelector((state)=>state);
    const dispatch = useDispatch();
    return  <NavBar content={
            
            <NavToolBar content={<>
                <H1 text={constant['lang'][state.lang].title}/>
                {state.page == 0 && <Settings className="settings-icon" onClick={()=>dispatch(setPage(2))}/>}
                </>
            }/>
        } />
}
export default Header;