import React, { useEffect } from "react";
import { constant } from "../config/lang";
import { H1, NavBar, NavToolBar } from "./ui-elements";
import { setPage, setTheme } from "../config/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from '@mui/icons-material';

const Header = () => {
    const state:any = useSelector((state)=>state);
    const style = {
            background:constant['themes'][state.theme]?.primaryColor,
            color:constant['themes'][state.theme]?.secondaryColor,
            width: "100%",
            height: "100%",
            "box-shadow": "-1px 2px 30px "+ constant['themes'][state.theme]?.primaryColor
        }
    const dispatch = useDispatch();
    useEffect(()=>{
        
    },[])
    return  <NavBar class={'app-header'} content={ 
            <NavToolBar style={style} content={<>
                <img src={constant.logo} height={50} width={50} style={{'padding-right':'2%'}} />
                <H1 text={constant['lang'][state.lang].title}/>
                {state.screenLoader?.show === false && state.page === 0 && <Settings className="settings-icon" onClick={()=>dispatch(setPage(2))}/>}
                </>
            }/>
        } />
}
export default Header;