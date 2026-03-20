export const clickSound = () => {
    const audioTune = new Audio('../assets/sounds/click.wav');
    audioTune?.play();
}

export const playSounds = (val) => {
    let aud = new Audio(`../assets/sounds/click.wav`);
    if (val=== 'a' || val==='l') {
        aud = new Audio(`../assets/sounds/l.mp3`);
        aud?.play()
    } else if (val === 'f') {
        aud = new Audio(`../assets/sounds/f.mp3`);
        aud?.play()
    } else if (val === 'm') {
        aud = new Audio(`../assets/sounds/m.wav`);
        aud?.play()
    } else if (val === 'e') {
        aud = new Audio(`../assets/sounds/e.wav`);
        aud?.play()
    } else if (val === 's') {
        aud = new Audio(`../assets/sounds/s.mp3`);
        aud?.play()
    } else {
        aud?.play()
    }
}