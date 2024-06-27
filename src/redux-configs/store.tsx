import { createSlice, configureStore } from '@reduxjs/toolkit'
let Game = "flames";
const counterSlice = createSlice({
  name: 'Flames',
  initialState: {
    bname:'',
    gname:'',
    lang:'en',
    flames:'',
    page:0
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
    setFlames: (state,action)=>{
      console.log(action)
      state.flames = action.payload;
    },
    submit: (state,action) =>{
      let bname = action.payload.bname?.trim();
      let gname = action.payload.gname?.trim();
          state.bname = action.payload.bname?.trim();
          state.gname = action.payload.gname?.trim();
      // removing space in both names
      let b = bname?.replace(' ','');
      let g = gname?.replace(' ','');
      // remove common charectors from both
      bname?.replace(' ','')?.split('')?.map((d:string,i:number)=>{
          g=g.replace(bname[i],'')
      });
      gname?.replace(' ','').split('')?.map((d:string,i:number)=>{
        b=b.replace(gname[i],'')
      });
      const aftRemoval = [b,g]?.join('')?.trim();
          const flames = (Fcount, arr, startChar) => {
      
            let game = arr?.join('');
            if (arr.length == 1) {
              console.log('flames', arr[0])
                // setFlames(arr[0])
              state.flames = arr[0];
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
                    console.log('flames',rmAr[rmAr?.length-1])
                    // setFlames(rmAr[rmAr?.length-1])
                    state.flames = rmAr[rmAr?.length-1]
                    return false;
                }
                if (nextChar !== '' && (rmAr.length > 1)) {
                    flames(Fcount, rmAr, nextChar);
                }
          }

      if (aftRemoval !== '') {
        console.log(aftRemoval)
            // running flames function
            flames(aftRemoval.length, Game.split(''),'');
        } else {
            setFlames('f') // setting default if both names same charectors with same length
        }
        state.page = 1;
      }
  }
})

export const { submit, setLang, setFlames, clearData } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})


// Can still subscribe to the store
export let state: { bname: string; gname: string; };
// store.subscribe(() => {
//     console.log(store.getState())
//     state = store.getState();
// })

