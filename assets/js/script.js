let Game = 'flames'
let ckLtr = 0;
let remainingTxt = '';
let gNameRm = '';
let bNameRm = '';
let flamable = 0;
const getFlameCount = (char, status) => {
    if (document.getElementById('flamesTxt') && document.getElementById('flamesTxt')?.style['display'] == 'block') {
      reset(1);
    }
    // console.log(document.getElementById('boyName').value == '')
    let bName = document.getElementById('boyName')?.value?.toLowerCase()?.trim()?.toString();
    let gName = document.getElementById('girlName')?.value?.toLowerCase()?.trim()?.toString();


    console.log(bName?.trim()?.toString(), gName?.trim().toString())
    if (bName?.trim()?.toString()?.length > 3 && gName?.trim().toString()?.length > 3) {
    // let curStatus = bName.localeCompare(gName);
    
        if (char !== undefined) {
            let index = gName.indexOf(char)
            if (index >= 0) {
                gNameRm = gName.replace(char, "");
                bNameRm = bName.replace(char, "");
            }
        }
            if (bName.length == ckLtr) {
                flamable=gNameRm.concat(bNameRm).length;
                // console.log("Count between :",flamable)
                flames(flamable, Game.split(''),'');
                return false
            }

            if (ckLtr <= status || char == undefined) {
                ckLtr+=1
                getFlameCount(bName[ckLtr-1], ckLtr)
            } else {
                return false
            }
  } else {
    alert('Boy and Girl Name must contain more than 4 characters')
  }
}
const flames = (Fcount, arr, startChar) => {
    
    // let getVal = Math.round(Fcount / arr.length);
    // console.log(arr)
    let game = arr?.join('');
    if (arr.length == 1) {
        // console.log("Final",arr)
        setFlames(arr[0])
        return false;
    }

        for(let i=0; i<arr.length;i++) {
            game += game
        }

        if (startChar !== '') {
            let startIndx=game.indexOf(startChar);
            game=game.slice(startIndx);
        }
        // console.log('Text Aft:', game)
        let nextChar = game.charAt(Fcount);
        let rmChar = game.charAt(Fcount-1);
        if (game.length < Fcount && startChar !== '') {
            // console.log('startChar',startChar)
            strikeLtr(startChar)
            // console.log(arr)
            let rmAr = arr.filter(d=>d!=startChar);
            flames(Fcount, rmAr, nextChar);
            return false;
        }
        if (arr.length == 2 && rmChar == '' && startChar !== '') {
          rmChar = startChar;
        }
        // console.log('arr',arr, 'remove',rmChar)
        strikeLtr(rmChar)
        // console.log(arr)
        let rmAr = arr?.filter(d=>d!=rmChar);
        Game = rmAr.join('');
        // console.log('Removed Char', rmChar)
        // console.log("Remaing", rmAr)
        // console.log("Start from :",nextChar)
        if (rmAr.length == 1) {
            // console.log("Final",rmAr)
            setFlames(rmAr[rmAr.length-1])
            return false;
        }
        if (nextChar !== '' && (rmAr.length > 1)) {
            // console.log('--------------------')
            flames(Fcount, rmAr, nextChar);
        }
    // }
}
const setFlames = (w) => {
    document.getElementById('flamesTxt-f').style['display'] = 'none';
    document.getElementById('flamesTxt-l').style['display'] = 'none';
    document.getElementById('flamesTxt-a').style['display'] = 'none';
    document.getElementById('flamesTxt-m').style['display'] = 'none';
    document.getElementById('flamesTxt-e').style['display'] ='none';
    document.getElementById('flamesTxt-s').style['display'] = 'none';
    if (w && document.getElementById('flamesTxt-'+w))
    {
      document.getElementById('flamesTxt-'+w).style['display'] = '';
      document.getElementById('flamesTxt').style['display'] = 'block';
      document.getElementById('boyName').value = ''
      document.getElementById('girlName').value = ''
      let s = document.getElementById('sound-'+w.toString());
      s?.play();
    }
}
const strikeLtr = (w) => {
    if (w && document.getElementById(w)) {
      document.getElementById(w).style.textDecoration = 'line-through'
    }
}
const reset = (val) => {
    Game = 'flames'
    ckLtr = 0;
    remainingTxt = '';
    gNameRm = '';
    bNameRm = '';
    flamable = 0;
    document.getElementById('flamesTxt').style.display = 'none';
    document.getElementById('flame').style.display = '';
    document.getElementById('f').style.textDecoration = 'none'
    document.getElementById('l').style.textDecoration = 'none'
    document.getElementById('a').style.textDecoration = 'none'
    document.getElementById('m').style.textDecoration = 'none'
    document.getElementById('e').style.textDecoration = 'none'
    document.getElementById('s').style.textDecoration = 'none'
    if (val !== 1) {
        document.getElementById('boyName').value = ''
        document.getElementById('girlName').value = ''
    }
}
reset(0);