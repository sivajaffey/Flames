import { useDispatch, useSelector } from 'react-redux';
import { constant, clickSound } from '../redux-configs/constant';
import Button from '@mui/material/Button';
import { clearData } from '../redux-configs/store';
const Footer = (props:any) => {
    const state:any = useSelector(state=>state);
    const dispatch = useDispatch();
    const clear = () => {
        clickSound();
        dispatch(clearData());
    }
    return (
        <div className="footer">
            {props?.back == 'back' ? <Button className='submit-btn pushable' variant="contained" onClick={()=>clear()}>
            <span className='front'>{constant['lang'][state.lang].goBack}</span></Button> : 
            <Button className='submit-btn pushable' variant="contained" onClick={props.submit}>
                <span className='front'>{constant['lang'][state.lang].submitBtn}</span></Button>}
        </div>
    );
}
export default Footer;