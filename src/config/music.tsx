export const clickSound = () => {
    const audioTune = new Audio('../assets/sounds/click.wav');
    audioTune?.play();
}

export const playSounds = (val) => {
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
    const audioTune = new Audio(`../assets/sounds/${aud}`);
    audioTune?.play();
}