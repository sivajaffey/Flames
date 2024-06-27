 import { useDispatch, useSelector } from 'react-redux';
import { constant } from "../redux-configs/constant"
import { setLang } from '../redux-configs/store';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
function Header () {
const state:any = useSelector((state)=>state);
const dispatch = useDispatch();
const setLanguage = (e:any) => {
    dispatch(setLang(e));
}   
const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value)
  };
    return (
        <AppBar>
        <Toolbar>
        <h1>{constant['lang'][state.lang].title}</h1>
        <Select
                className='lang-select'
                onChange={handleChange}
                value={state.lang}
            >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'span'}>Spanish</MenuItem>
                <MenuItem value={'fr'}>French</MenuItem>
            </Select>
        </Toolbar>
        </AppBar>
    )
}
export default Header;