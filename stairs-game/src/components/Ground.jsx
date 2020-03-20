import React from 'react';
import {vert, hori} from '../utils/constants';

const Ground = () => {
    const width = window.innerWidth;
    const heightPerc = .15;
    const height = window.innerHeight * heightPerc;

    const groundStyle = { fill: 'brown' }
    const groundBorder = {
        stroke: 'black',
        strokeWidth: '10px'
    }
    
    return (
        <g id="ground">
            <rect
                id="ground"
                data-name="ground"
                style={groundStyle}
                x={hori.left}
                y={vert.bottom - height}
                width={width}
                height={height}
            />

            <line
                x1={hori.left}
                y1={vert.bottom - height}
                x2={hori.right}
                y2={vert.bottom - height}
                style={groundBorder}
            />
        </g>
    )
}

export default Ground;