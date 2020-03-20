import React from 'react';
import {vert, hori} from '../utils/constants';

const Sky = () => {
    const width = window.innerWidth;
    const heightPerc = .85;
    const height = window.innerHeight * heightPerc;

    const style = { fill: 'blue' }
    
    return (
        <rect
            style={style}
            x={hori.left}
            y={vert.top}
            width={width}
            height={height}
        />
    )
}

export default Sky;