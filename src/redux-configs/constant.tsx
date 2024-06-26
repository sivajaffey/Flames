export const constant:any = {
    lang: {
        'en' : {
                title:"Flames",
                subtitle:"Have fun!",
                bname:"Boy name",
                bnamePlc:"Enter boy name..",
                gname:"Girl name",
                gnamePlc:"Enter girl name..",
                submitBtn:"Find Match",
                goBack:"Go Back"
            },
            'fr' : {
                title:"Flames",
                subtitle:"Amusez-vous!",
                bname:"Nom du garçon",
                bnamePlc:"Entrez le nom du garçon..",
                gname:"Nom de fille",
                gnamePlc:"Entrez le nom de la fille..",
                submitBtn:"Trouver la correspondance",
                goBack:"Retourner"
            },
            'span':{
                title:"Flames",
                subtitle:"¡Divertirse!",
                bname:"nombre del niño",
                bnamePlc:"Ingrese el nombre del niño..",
                gname:"nombre de niña",
                gnamePlc:"Ingrese el nombre de la niña..",
                submitBtn:"Encontrar pareja",
                goBack:"Regresa"
            },
    },
    flames: {
            'en' : {
                'f':"FRIENDS",
                'l':'LOVE',
                'a':'AFFECTION',
                'm':'MARRIAGE',
                'e':'ENEMY',
                's':'SISTER'
            },
            'fr' : {
                'f':"AMIES",
                'l':'AMOUR',
                'a':'AFFECTION',
                'm':'MARIAGE',
                'e':'ENNEMIE',
                's':'SŒUR'
            },
            'span':{
                'f':"AMIGOS",
                'l':'AMAR',
                'a':'AFECTO',
                'm':'CASAMIENTO',
                'e':'ENEMIGA',
                's':'HERMANA'
            },
    }
    

}
export const clickSound = () => {
    const audioTune = new Audio('../src/assets/sounds/click.wav');
    audioTune?.play();
}

export const playSounds = (val:string) => {
    let aud;
    if (val== 'a' || val=='l') {
        aud = 'l.mp3'
    } else if (val == 'f') {
        aud = 'f.mp3'
    } else if (val == 'm') {
        aud = 'm.wav'
    } else if (val == 'e') {
        aud = 'e.wav'
    } else if (val == 's') {
        aud = 's.mp3'
    } else {
        aud = 'click.wav'
    }
    const audioTune = new Audio(`../src/assets/sounds/${aud}`);
    audioTune?.play();
}