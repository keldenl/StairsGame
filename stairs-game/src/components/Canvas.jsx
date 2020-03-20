import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {userSize} from '../utils/constants';
import Sky from './Sky';
import Ground from './Ground';
import Stair from './Stair';

class Canvas extends Component {
    constructor(props) {
        super(props);

        // ViewBox makes (0,0) the center
        this.viewBox = [
            window.innerWidth / -2, // min-x
            window.innerHeight / -2,  // min-y
            window.innerWidth, // width
            window.innerHeight // height
        ];

        this.userStartY = 0; // window.innerHeight / -4;
        this.animateRef = React.createRef();
    }

    render () {
        console.log(this.props.stairList);
        console.log(`Prev: ${this.props.prevPosition} Current: ${this.props.position}`)

        if (this.animateRef.current && this.animateRef.current.childNodes.length > 0) { 
            this.animateRef.current.childNodes[0].beginElement();
        }

        return (
            <svg 
                id="game-canvas"
                preserveAspectRatio="xMaxYMax none"
                viewBox={this.viewBox}    
            >
                <div ref={this.animateRef}>
                    <AnimateMove id='user' attr='cx' from={this.props.prevPosition * (userSize * 2)} to={this.props.position * (userSize * 2)} />    
                </div>
                <Sky/>
                {this.props.stairList.map((stair, i) => {
                    return <Stair x={stair*(userSize*2)} y={(this.userStartY+userSize)+(i*userSize * 2)} />
                })}
                {/* <Stair x={0} y={this.userStartY + userSize} /> */}
                <circle id='user' cx={0} cy={this.userStartY} r={userSize} />
                <Ground/>
            </svg>
        )
    }
    
    
}

Canvas.propTypes = {
    position: PropTypes.number.isRequired,
};

const AnimateMove = (props) => {
    return (
        <animate 
                xlinkHref={`#${props.id}`}
                attributeName={props.attr}
                from={props.from}
                to={props.to}
                dur=".1s"
                begin="indefinite"
                fill="freeze" 
            />
    )
};

export default Canvas;