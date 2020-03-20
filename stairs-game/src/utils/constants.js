export const vert = {
    top: window.innerHeight / -2,
    bottom: window.innerHeight / 2
}

export const hori = {
    left: window.innerWidth / -2,
    right: window.innerWidth / 2
}

export const userSize = 25;

const randSplit = .9;
let frac = 3;

export function getNewStair(prevStair) {
    let rand = Math.random();
    var newStair = prevStair;
    
    if (rand < randSplit/frac) { newStair -= 1; }
    else if (rand < randSplit) { newStair += 1; }

    if (newStair > 10) { newStair -= 2; frac=1.5; }
    else if (newStair < -10) { newStair += 2; frac=3; }


    return newStair;
}