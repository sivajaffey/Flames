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
                goBack:"Go Back",
                error:'Please enter minimum 4 character max of 20 character'
            },
            'fr' : {
                title:"Flames",
                subtitle:"Amusez-vous!",
                bname:"Nom du garçon",
                bnamePlc:"Entrez le nom du garçon..",
                gname:"Nom de fille",
                gnamePlc:"Entrez le nom de la fille..",
                submitBtn:"Trouver la correspondance",
                goBack:"Retourner",
                error:'Veuillez saisir au minimum 4 caractères et au maximum 20 caractères.'
            },
            'span':{
                title:"Flames",
                subtitle:"¡Divertirse!",
                bname:"nombre del niño",
                bnamePlc:"Ingrese el nombre del niño..",
                gname:"nombre de niña",
                gnamePlc:"Ingrese el nombre de la niña..",
                submitBtn:"Encontrar pareja",
                goBack:"Regresa",
                error:'Por favor ingrese un mínimo de 4 caracteres y un máximo de 20 caracteres.'
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
    },
    themes: {
        "basic": {
            background: "url('../src/assets/img/background.jpg')",
            header:"hsl(340deg 100% 32%)",
            button:"hsl(340deg 100% 32%)",
        },
        "f": {
            background: "url('../src/assets/img/f-bg.jpg')",
            header:"rgb(127 132 192)",
            button:"rgb(127 132 192)",
        },
        "l": {
            background: "url('../src/assets/img/l-bg.jpg')",
            header:"rgb(167 89 175)",
            button:"rgb(167 89 175)",
        },
        "a": {
            background: "url('../src/assets/img/a-bg.jpg')",
            header:"rgb(77 163 63)",
            button:"rgb(77 163 63)",
        },
        "m":{
            background: "url('../src/assets/img/m-bg.jpg')",
            header:"rgb(192 187 171)",
            button:"rgb(192 187 171)",
        },
        "e": {
            background: "url('../src/assets/img/e-bg.png')",
            header:"rgb(64 65 75)",
            button:"rgb(64 65 75)",
        },
        "s": {
            background: "url('../src/assets/img/s-bg.jpg')",
            header:"rgb(184 160 19)",
            button:"rgb(184 160 19)",
        }
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