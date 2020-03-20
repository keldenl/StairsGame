import React from 'react';
import {userSize} from '../utils/constants';


const Stair = (props) => {
    const width = userSize * 2;

    const style = {
        stroke: 'black',
        strokeWidth: '5px'
    }
    
    return (
        // <g id="ground">
        //     <rect
        //         id="ground"
        //         data-name="ground"
        //         style={groundStyle}
        //         x={hori.left}
        //         y={vert.bottom - height}
        //         width={width}
        //         height={height}
        //     />

            <line
                x1={props.x - (userSize)}
                y1={props.y + 2.5}
                x2={props.x + width - (userSize)}
                y2={props.y + 2.5}
                style={style}
            />
        // </g>
    )
}

export default Stair;