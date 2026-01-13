export const constant = {
    version:'1.0.5',
    logo:'../assets/img/logo.png',
    webAppUrl:'flames-web.netlify.app',
    lang: {
        // 'ta':{
        //     "lang": "தமிழ்",
        //     "title": "Flames",
        //     "subtitle": "மகிழுங்கள்!",
        //     "bname": "பையன் பெயர்",
        //     "bnamePlc": "பையனின் பெயரை உள்ளிடவும்..",
        //     "gname": "பெண் பெயர்",
        //     "gnamePlc": "பெண் பெயரை உள்ளிடவும்..",
        //     "submitBtn": "பொருத்தத்தைக் கண்டறியவும்",
        //     "goBack": "திரும்பி செல்",
        //     "error": "குறைந்தபட்சம் 4 எழுத்துகள் அதிகபட்சம் 20 எழுத்துகளை உள்ளிடவும்",
        //     "customFlames": "தனிப்பயன் Flames",
        //     "pageNotAvailable": "பக்கம் எதுவும் கிடைக்கவில்லை",
        //     "langHeader": "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
        //     "themeSelect": "உங்கள் தீம் தேர்ந்தெடுக்கவும்",
        //     "history": "வரலாறு",
        //     "view": "காண்க",
        //     "clear": "தெளிவான வரலாறு",
        //     "noData": "தரவு எதுவும் கிடைக்கவில்லை",
        //     "on": "இயக்கவும்",
        //     "off": "அணைக்க",
        //     "loading": "ஏற்றுகிறது...",
        //     "theme": {
        //         "basic": "அடிப்படை",
        //         "lite": "லைட்",
        //         "dw": "டெட்பூல் & வால்வரின்",
        //         "sp": "சூப்பர்மேன்"
        //     },
        //     "calFlames": "Flames கணக்கிடுதல்",
        //     "download": "Flames நிறுவவும்",
        //     "share": "பகிரவும்",
        //     "version": "பதிப்பு",
        //     "dev": "டெவலப்பர்"
        //     },
        // 'te':{
        //     "lang": "తమిళం",
        //     "title": "Flames",
        //     "subtitle": "ఆనందించండి!",
        //     "bname": "అబ్బాయి పేరు",
        //     "bnamePlc": "అబ్బాయి పేరు నమోదు చేయండి..",
        //     "gname": "అమ్మాయి పేరు",
        //     "gnamePlc": "అమ్మాయి పేరు నమోదు చేయండి..",
        //     "submitBtn": "సరిపోలికను కనుగొనండి",
        //     "goBack": "వెనక్కి వెళ్ళు",
        //     "error": "దయచేసి కనిష్టంగా 4 అక్షరాలు గరిష్టంగా 20 అక్షరాలు నమోదు చేయండి",
        //     "customFlames": "కస్టమ్ Flames",
        //     "pageNotAvailable": "పేజీ అందుబాటులో లేదు",
        //     "langHeader": "మీ భాషను ఎంచుకోండి",
        //     "themeSelect": "మీ థీమ్‌ని ఎంచుకోండి",
        //     "history": "చరిత్ర",
        //     "view": "చూడండి",
        //     "clear": "చరిత్రను క్లియర్ చేయండి",
        //     "noData": "డేటా ఏదీ కనుగొనబడలేదు",
        //     "on": "ఆన్ చేయండి",
        //     "off": "ఆఫ్ చేయండి",
        //     "loading": "లోడ్ అవుతోంది...",
        //     "theme": {
        //         "basic": "ప్రాథమిక",
        //         "lite": "లైట్",
        //         "dw": "డెడ్‌పూల్ & వుల్వరైన్",
        //         "sp": "సూపర్మ్యాన్"
        //     },
        //     "calFlames": "Flames లెక్కిస్తోంది",
        //     "download": "Flames ఇన్స్టాల్ చేయండి",
        //     "share": "షేర్ చేయండి",
        //     "version": "వెర్షన్",
        //     "dev": "డెవలపర్"
        //     },
        // 'kn':{
        //     "lang": "ತಮಿಳು",
        //     "title": "Flames",
        //     "subtitle": "ಆನಂದಿಸಿ!",
        //     "bname": "ಹುಡುಗನ ಹೆಸರು",
        //     "bnamePlc": "ಹುಡುಗನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ..",
        //     "gname": "ಹುಡುಗಿಯ ಹೆಸರು",
        //     "gnamePlc": "ಹುಡುಗಿಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ..",
        //     "submitBtn": "ಹೊಂದಾಣಿಕೆಯನ್ನು ಹುಡುಕಿ",
        //     "goBack": "ಹಿಂತಿರುಗಿ",
        //     "error": "ದಯವಿಟ್ಟು ಕನಿಷ್ಠ 4 ಅಕ್ಷರಗಳ ಗರಿಷ್ಠ 20 ಅಕ್ಷರಗಳನ್ನು ನಮೂದಿಸಿ",
        //     "customFlames": "ಕಸ್ಟಮ್ Flames",
        //     "pageNotAvailable": "ಯಾವುದೇ ಪುಟ ಲಭ್ಯವಿಲ್ಲ",
        //     "langHeader": "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        //     "themeSelect": "ನಿಮ್ಮ ಥೀಮ್ ಆಯ್ಕೆಮಾಡಿ",
        //     "history": "ಇತಿಹಾಸ",
        //     "view": "ವೀಕ್ಷಿಸಿ",
        //     "clear": "ಇತಿಹಾಸವನ್ನು ತೆರವುಗೊಳಿಸಿ",
        //     "noData": "ಯಾವುದೇ ಡೇಟಾ ಕಂಡುಬಂದಿಲ್ಲ",
        //     "on": "ಆನ್ ಮಾಡಿ",
        //     "off": "ಆಫ್ ಮಾಡಿ",
        //     "loading": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        //     "theme": {
        //         "basic": "ಮೂಲಭೂತ",
        //         "lite": "ಲೈಟ್",
        //         "dw": "ಡೆಡ್‌ಪೂಲ್ ಮತ್ತು ವೊಲ್ವೆರಿನ್",
        //         "sp": "ಸೂಪರ್‌ಮ್ಯಾನ್"
        //     },
        //     "calFlames": "Flames ಲೆಕ್ಕಾಚಾರ",
        //     "download": "Flames ಸ್ಥಾಪಿಸಿ",
        //     "share": "ಹಂಚಿಕೊಳ್ಳಿ",
        //     "version": "ಆವೃತ್ತಿ",
        //     "dev": "ಡೆವಲಪರ್"
        //     },
        // 'hi':{
        //     "lang": "अंग्रेज़ी",
        //     "title": "Flames",
        //     "subtitle": "मस्ती करो!",
        //     "bname": "लड़के का नाम",
        //     "bnamePlc": "लड़के का नाम दर्ज करें..",
        //     "gname": "लड़की का नाम",
        //     "gnamePlc": "लड़की का नाम दर्ज करें..",
        //     "submitBtn": "मिलान खोजें",
        //     "goBack": "वापस जाओ",
        //     "error": "कृपया न्यूनतम 4 अक्षर अधिकतम 20 अक्षर दर्ज करें",
        //     "customFlames": "कस्टम Flames",
        //     "pageNotAvailable": "कोई पेज उपलब्ध नहीं",
        //     "langHeader": "अपनी भाषा का चयन करें",
        //     "themeSelect": "अपनी थीम चुनें",
        //     "history": "इतिहास",
        //     "view": "देखना",
        //     "clear": "इतिहास मिटा दें",
        //     "noData": "डाटा प्राप्त नहीं हुआ",
        //     "on": "चालू करो",
        //     "off": "बंद करें",
        //     "loading": "लोड हो रहा है...",
        //     "theme": {
        //         "basic": "बुनियादी",
        //         "lite": "लाइट",
        //         "dw": "डेडपूल और वूल्वरिन",
        //         "sp": "अतिमानव"
        //     },
        //     "calFlames": "Flames की गणना",
        //     "download": "Flames स्थापित करें",
        //     "share": "शेयर करना",
        //     "version": "संस्करण",
        //     "dev": "डेवलपर"
        //     },
        // 'ml':{
        //     "lang": "ഇംഗ്ലീഷ്",
        //     "title": "Flames",
        //     "subtitle": "തമാശയുള്ള!",
        //     "bname": "ആൺകുട്ടിയുടെ പേര്",
        //     "bnamePlc": "ആൺകുട്ടിയുടെ പേര് നൽകുക..",
        //     "gname": "പെൺകുട്ടിയുടെ പേര്",
        //     "gnamePlc": "പെൺകുട്ടിയുടെ പേര് നൽകുക..",
        //     "submitBtn": "പൊരുത്തം കണ്ടെത്തുക",
        //     "goBack": "മടങ്ങിപ്പോവുക",
        //     "error": "ദയവായി കുറഞ്ഞത് 4 പ്രതീകങ്ങൾ പരമാവധി 20 പ്രതീകങ്ങൾ നൽകുക",
        //     "customFlames": "ഇഷ്‌ടാനുസൃത Flames",
        //     "pageNotAvailable": "ഒരു പേജും ലഭ്യമല്ല",
        //     "langHeader": "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
        //     "themeSelect": "നിങ്ങളുടെ തീം തിരഞ്ഞെടുക്കുക",
        //     "history": "ചരിത്രം",
        //     "view": "കാണുക",
        //     "clear": "ചരിത്രം മായ്‌ക്കുക",
        //     "noData": "ഡാറ്റയൊന്നും കണ്ടെത്തിയില്ല",
        //     "on": "ഓൺ ചെയ്യുക",
        //     "off": "ഓഫ് ചെയ്യുക",
        //     "loading": "ലോഡ് ചെയ്യുന്നു...",
        //     "theme": {
        //         "basic": "അടിസ്ഥാനം",
        //         "lite": "ലൈറ്റ്",
        //         "dw": "ഡെഡ്‌പൂൾ & വോൾവറിൻ",
        //         "sp": "സൂപ്പർമാൻ"
        //     },
        //     "calFlames": "Flames കണക്കാക്കുന്നു",
        //     "download": "Flames ഇൻസ്റ്റാൾ ചെയ്യുക",
        //     "share": "പങ്കിടുക",
        //     "version": "പതിപ്പ്",
        //     "dev": "ഡെവലപ്പർ"
        //     },
        'en' : {
                lang:'English',
                title:"Flames",
                subtitle:"Have fun!",
                bname:"Boy name",
                bnamePlc:"Enter boy name..",
                gname:"Girl name",
                gnamePlc:"Enter girl name..",
                submitBtn:"Find Match",
                goBack:"Go Back",
                error:'Please enter minimum 4 character max of 20 character',
                customFlames:"Custom Flames",
                pageNotAvailable:"No Page Available",
                langHeader:"Select your Language",
                themeSelect:"Select your Theme",
                history:"History",
                view:"View",
                clear:"Clear History",
                noData:"No Data Found",
                on:'Turn On',
                off:'Turn Off',
                loading:"Loading...",
                theme:{
                   basic:"Basic", 
                   lite:"Lite",
                   dw:"Deadpool & Wolverine",
                   sp: "Superman"
                },
                calFlames:"Calculating flames",
                download:'Install Flames',
                share:'Share',
                version:'Version',
                dev:"Developer"
            },
            'fr' : {
                lang:'Français',
                title:"Flames",
                subtitle:"Amusez-vous!",
                bname:"Nom du garçon",
                bnamePlc:"Entrez le nom du garçon..",
                gname:"Nom de fille",
                gnamePlc:"Entrez le nom de la fille..",
                submitBtn:"Trouver la correspondance",
                goBack:"Retourner",
                error:'Veuillez saisir au minimum 4 caractères et au maximum 20 caractères.',
                customFlames:"Flames personnalisées",
                pageNotAvailable:"Aucune page disponible",
                langHeader:"Sélectionnez votre langue",
                themeSelect:"Sélectionnez votre thème",
                history:"Histoire",
                view:"Voir",
                clear:"Effacer l'historique",
                noData:"Aucune donnée trouvée",
                on:'Allumer',
                off:'Éteindre',
                loading:"Chargement...",
                theme:{
                   basic:"Basique", 
                   lite:"Légère",
                   dw:"Deadpool & Wolverine",
                   sp: "Superman"
                },
                calFlames:"Calcul des flammes",
                download:'Installer Flames',
                share:'Partager',
                version:'Version',
                dev:"Développeur"
            },
            'span':{
                lang:'Española',
                title:"Flames",
                subtitle:"¡Divertirse!",
                bname:"nombre del niño",
                bnamePlc:"Ingrese el nombre del niño..",
                gname:"nombre de niña",
                gnamePlc:"Ingrese el nombre de la niña..",
                submitBtn:"Encontrar pareja",
                goBack:"Regresa",
                error:'Por favor ingrese un mínimo de 4 caracteres y un máximo de 20 caracteres.',
                customFlames:"Flames personalizadas",
                pageNotAvailable:"No hay página disponible",
                langHeader:"Selecciona tu idioma",
                themeSelect:"Selecciona tu tema",
                history:"Historia",
                view:"Vista",
                clear:"Borrar historial",
                noData:"No se encontraron datos",
                on:'Encender',
                off:'Apagar',
                loading:"Cargando...",
                theme:{
                   basic:"Básica", 
                   lite:"Ligera",
                   dw: "Deadpool y Lobezno", 
                   sp: "Superman"
                },
                calFlames:"Calculando llamas",
                download:'Instalar Flames',
                share:'Compartir',
                version:'Versión',
                dev:"Desarrollador"
            },
            'jpan':{
                lang:'日本語',
                title:"Flames",
                subtitle:"楽しむ！",
                bname:"男の子の名前",
                bnamePlc:"男の子の名前を入力してください。",
                gname:"女の子の名前",
                gnamePlc:"女の子の名前を入力してください。",
                submitBtn:"一致の検索",
                goBack:"戻る",
                error:'最小 4 文字、最大 20 文字を入力してください',
                customFlames:"カスタムフレーム",
                pageNotAvailable:"利用可能なページがありません",
                langHeader:"言語を選択してください",
                themeSelect:"テーマを選択してください",
                history:"歴史",
                view:"ビュー",
                clear:"履歴をクリアする",
                noData:"データが見つかりません",
                on:'オンにする',
                off:'消す',
                loading:"読み込み中...",
                theme:{
                   basic:"基本", 
                   lite:"ライト",
                   dw:"「デッドプール＆ウルヴァリン」、",
                   sp:"「スーパーマン」"
                },
                calFlames:"炎を計算する",
                download:'Flames をインストール',
                share:'共有',
                version:'バージョン',
                dev:"開発者"
            },
            'chin':{
                lang:'中国人',
                title:"Flames",
                subtitle:"玩得开心！",
                bname:"男孩名字",
                bnamePlc:"输入男孩名字..",
                gname:"女孩名字",
                gnamePlc:"输入女孩名字..",
                submitBtn:"寻找匹配",
                goBack:"回去",
                error:'请输入最少 4 个字符，最多 20 个字符',
                customFlames:"定制火焰",
                pageNotAvailable:"没有可用页面",
                langHeader:"选择您的语言",
                themeSelect:"选择您的主题",
                history:"历史",
                view:"看法",
                clear:"清除历史记录",
                noData:"没有找到数据",
                on:'打开',
                off:'关',
                loading:"加载中...",
                theme:{
                   basic:"基本的", 
                   lite:"精简版",
                   dw:"死侍與金鋼狼",
                   sp:"超人"
                },
                calFlames:"计算火焰",
                download:'安装火焰',
                share:'分享',
                version:'版本',
                dev:"开发商"
            },
            'kor':{
                lang:'한국인',
                title:"Flames",
                subtitle:"재미있게 보내세요!",
                bname:"소년 이름",
                bnamePlc:"남자아이 이름을 입력하세요..",
                gname:"여자 이름",
                gnamePlc:"여자 이름을 입력하세요..",
                submitBtn:"일치 찾기",
                goBack:"돌아가기",
                error:'최소 4자에서 최대 20자까지 입력하세요.',
                customFlames:"맞춤형 불꽃",
                pageNotAvailable:"사용 가능한 페이지가 없습니다",
                langHeader:"언어를 선택하세요",
                themeSelect:"테마를 선택하세요",
                history:"역사",
                view:"보다",
                clear:"기록 지우기",
                noData:"데이터를 찾을 수 없습니다",
                on:'켜다',
                off:'끄기',
                loading:"로드 중...",
                theme:{
                   basic:"기초적인", 
                   lite:"라이트",
                   dw: "데드풀 & 울버린",
                   sp: "슈퍼맨"
                },
                calFlames:"화염 계산",
                download:'Flames 설치',
                share:'공유',
                version:'버전',
                dev:"개발자"
            }
    },
    loaderImg:{
        flamesLoader:"../assets/img/loading.gif"
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
            'jpan' : {
                'f':"友達",
                'l':'愛',
                'a':'愛情',
                'm':'結婚',
                'e':'敵',
                's':'妹'
            },
            'chin' : {
                'f':"朋友们",
                'l':'爱',
                'a':'感情',
                'm':'婚姻',
                'e':'敌人',
                's':'姐姐'
            },
            'kor':{
                'f':"친구",
                'l':'사랑',
                'a':'애정',
                'm':'결혼',
                'e':'적',
                's':'자매'
            }
    },
    themes: {
        "basic": {
            background: "url('../assets/img/background.jpg')",
            primaryColor:'#DC143C',
            secondaryColor:'white',
            themeflames: {
                    "f": {
                        background: "../assets/img/f-bg.jpg",
                    },
                    "l": {
                        background: "../assets/img/l-bg.jpg",
                    },
                    "a": {
                        background: "../assets/img/a-bg.jpg",
                    },
                    "m":{
                        background: "../assets/img/m-bg.jpg",
                    },
                    "e": {
                        background: "../assets/img/e-bg.png",
                    },
                    "s": {
                        background: "../assets/img/s-bg.jpg",
                    }
            }
        },
        "lite": {
            background: "url('../assets/img/lite.jpg')",
            primaryColor:'#4db8b8',
            secondaryColor:'white',
            themeflames: {
                    "f": {
                        background: "../assets/img/f-bg.jpg",
                    },
                    "l": {
                        background: "../assets/img/l-bg.jpg",
                    },
                    "a": {
                        background: "../assets/img/a-bg.jpg",
                    },
                    "m":{
                        background: "../assets/img/m-bg.jpg",
                    },
                    "e": {
                        background: "../assets/img/e-bg.png",
                    },
                    "s": {
                        background: "../assets/img/s-bg.jpg",
                    }
            }
        },
        "dw":{
            background: "url('../assets/img/dw-bg.jpg')",
            primaryColor:'yellow',
            secondaryColor:'rgb(254, 5, 51)',
            flamesLoader:"../assets/img/wd-loader.gif",
            themeflames: {
                    "f": {
                        background: "../assets/img/dw-f.jpg",
                    },
                    "l": {
                        background: "../assets/img/dw-l.avif",
                    },
                    "a": {
                        background: "../assets/img/dw-a.jpg",
                    },
                    "m":{
                        background: "../assets/img/dw-m.jpeg",
                    },
                    "e": {
                        background: "../assets/img/dw-e.jpg",
                    },
                    "s": {
                        background: "../assets/img/dw-s.jpeg",
                    }
            }
        },
        "sp":{
            background: "url('../assets/img/sp-bg.jpg')",
            primaryColor:'red',
            secondaryColor:'yellow',
            flamesLoader:"../assets/img/sp-loader.gif",
            themeflames: {
                    "f": {
                        background: "../assets/img/sp-f.jpeg",
                    },
                    "l": {
                        background: "../assets/img/sp-l.avif",
                    },
                    "a": {
                        background: "../assets/img/sp-a.jpeg",
                    },
                    "m":{
                        background: "../assets/img/sp-m.jpeg",
                    },
                    "e": {
                        background: "../assets/img/sp-e.avif",
                    },
                    "s": {
                        background: "../assets/img/sp-s.jpeg",
                    }
            }
        },
        "f": {
            background: "url('../assets/img/f-bg.jpg')",
            primaryColor:"rgb(127 132 192)",
            secondaryColor:'#ffffff',
        },
        "l": {
            background: "url('../assets/img/l-bg.jpg')",
            primaryColor:"rgb(167 89 175)",
            secondaryColor:'#ffffff',
            effects:"../assets/img/l-jump.gif"
        },
        "a": {
            background: "url('../assets/img/a-bg.jpg')",
            primaryColor:"rgb(77 163 63)",
            secondaryColor:'#ffffff',
            effects:"../assets/img/a-dance.gif"
        },
        "m":{
            background: "url('../assets/img/m-bg.jpg')",
            primaryColor:"rgb(192 187 171)",
            secondaryColor:'#ffffff',
        },
        "e": {
            background: "url('../assets/img/e-bg.png')",
            primaryColor:"rgb(64 65 75)",
            secondaryColor:'#ffffff',
        },
        "s": {
            primaryColor: "url('../assets/img/s-bg.jpg')",
            header:"rgb(184 160 19)",
            secondaryColor:'#ffffff',
        }
    }

}