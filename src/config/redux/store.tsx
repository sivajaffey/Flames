import { createSlice, configureStore } from '@reduxjs/toolkit'
import {constant} from '../lang'
let Game = "flames";
let theme = "basic";
const counterSlice = createSlice({
  name: 'Flames',
  initialState: {
    bname:'',
    gname:'',
    lang:'en',
    flames:'',
    page:0,
    theme: theme,
    history:0,
    historyList:[]
  },
  reducers: {
    clearData:(state)=>{
      state.gname= '';
      state.bname = '';
      state.flames='';
      state.page = 0;
      Game = "flames";
    },
    setLang:(state,action)=>{
      state.lang = action.payload;
    },
    setPage:(state,action)=>{
      state.page = action.payload;
    },
    setFlames: (state,action)=>{
      state.flames = action.payload;
    },
    setHistory: (state,action) => {
      state.history = action.payload;
    },
    setTheme:(state,action)=>{
      let theme = (action.payload) ? action.payload :  'basic'
      state.theme = theme; // console.log(constant['themes'][theme]?.header)
      let appLock=document.getElementById('AppLook')
      if (appLock) {
        appLock.style.background= ''+constant['themes'][theme]?.background+'';
      }
      if (document.getElementsByTagName('header')?.length > 0){
        document.getElementsByTagName('header')[0].style.background = constant['themes'][theme]?.header;
      }
      if (document.getElementsByTagName('button')?.length > 0){
        for(let i=0;i<=document.getElementsByTagName('button').length;i++) { // console.log(constant['themes'][theme]?.button)
          document.getElementsByTagName('button')[0].style.background = constant['themes'][theme]?.button;
        }
      }
    },
    setHistoryList: (state,action)=>{
      console.log(action.payload)
      state.historyList = action.payload;
    }, 
    submit: (state,action) =>{
      let bname = action.payload.bname?.trim();
      let gname = action.payload.gname?.trim();
      
      const setHistory = () =>{ // store's history in localstorage
        if (state.history === 1) {
          let today = new Date();
          let array = [];
          if (localStorage && localStorage.getItem('historyData')) {
            array = JSON.parse(localStorage.getItem('historyData')) || []
          }
          
          console.log(array)
          let flameObj={
            bname:state.bname,
            gname:state.gname,
            flames:state.flames,
            time: today,
            type:0
          }
          array.push(flameObj);
          localStorage.setItem('historyData',JSON.stringify(array));
        }
      }
          state.bname = action.payload.bname?.trim();
          state.gname = action.payload.gname?.trim();
      // removing space in both names
      let b = bname?.replace(' ','');
      let g = gname?.replace(' ','');
      // remove common charectors from both
      bname?.replace(' ','')?.split('')?.map((d,i)=>{
          g=g.replace(bname[i],'')
      });
      gname?.replace(' ','').split('')?.map((d,i)=>{
        b=b.replace(gname[i],'')
      });
      const aftRemoval = [b,g]?.join('')?.trim();
          const flames = (Fcount, arr, startChar) => {
      
            let game = arr?.join('');
            if (arr.length == 1) {
                // setFlames(arr[0])
              state.flames = arr[0];
              setHistory();
                return false;
            }

                for(let i=0; i<arr.length;i++) {
                    game += game
                }

                if (startChar !== '') {
                    let startIndx=game.indexOf(startChar);
                    game=game.slice(startIndx);
                }
                let nextChar = game.charAt(Fcount);
                let rmChar = game.charAt(Fcount-1);
                if (game.length < Fcount && startChar !== '') {
                    // strikeLtr(startChar)
                    let rmAr = arr.filter(d=>d!=startChar);
                    // if (rmAr.length == 2) {
                    //   let nextInd = Game.indexOf(startChar)
                    //   startChar = rmAr[nextInd]
                    //   rmAr = rmAr.filter(d=>d!=startChar);
                    // }
                    // console.log(game, Fcount, rmAr, startChar)
                    flames(Fcount, rmAr, nextChar);
                    return false;
                }
                if (arr.length == 2 && rmChar == '' && startChar !== '') {
                  rmChar = startChar;
                }
                // strikeLtr(rmChar)
                let rmAr = arr?.filter((d)=>d!=rmChar);
                Game = rmAr?.join('');

                if (rmAr.length == 1) {
                    // setFlames(rmAr[rmAr.length-1])
                    // console.log(rmAr)
                    // console.log('flames',rmAr[rmAr?.length-1])
                    // setFlames(rmAr[rmAr?.length-1])
                    state.flames = rmAr[rmAr?.length-1]
                    setHistory();
                    return false;
                }
                if (nextChar !== '' && (rmAr.length > 1)) {
                    flames(Fcount, rmAr, nextChar);
                }
          }
          // console.log(state.flames, aftRemoval)
      if (aftRemoval !== '') {
      //  console.log(aftRemoval)
            // running flames function
            flames(aftRemoval.length, Game.split(''),'');
        } else {
       //   console.log('s')
          state.flames = 'f';
          setHistory();
            // setFlames('f') // setting default if both names same charectors with same length
        }
        state.page = 1;
      }
  }
})

export const { submit, setLang, setFlames, clearData, setTheme, setPage, setHistory, setHistoryList } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})


// Can still subscribe to the store
// export let state: { bname: string; gname: string; };
// store.subscribe(() => {
//     console.log(store.getState())
//     state = store.getState();
// })