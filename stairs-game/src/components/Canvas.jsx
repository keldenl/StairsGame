import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {userSize, vert, hori} from '../utils/constants';

import Sky from './Sky';
import Ground from './Ground';
import Stair from './Stair';
import CurrentScore from './CurrentScore';

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
        this.stairsRef = React.createRef();
    }

    render () {
        console.log(this.props.stairList);
        console.log(this.props.stairIdx);
        // console.log(`Prev: ${this.props.prevPosition} Current: ${this.props.position}`)

        if (this.animateRef.current && this.animateRef.current.childNodes.length > 0) { 
            this.animateRef.current.childNodes[0].beginElement();
            console.log(this.animateRef.current.childNodes[1]);
            this.stairsRef.current.childNodes[0].beginElement();
        }

        return (
            <svg 
                id="game-canvas"
                preserveAspectRatio="xMaxYMax none"
                viewBox={this.viewBox}    
            >
                <defs>
                    <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                    </filter>
                </defs>

                <div ref={this.animateRef}>
                    <AnimateMove id='user' attr='cx' from={this.props.prevPosition * (userSize * 2)} to={this.props.position * (userSize * 2)} />    
                </div>


                <Sky/>
                <g id="stairs" ref={this.stairsRef}>
                    <animateTransform attributeName="transform" attributeType="XML" type="translate" from={`0 ${(this.props.stairIdx-1) * (userSize * -2)}`} to={`0 ${this.props.stairIdx * (userSize * -2)}`} dur=".05s" begin="indefinite" fill="freeze"></animateTransform>

                    {this.props.stairList.map((stair, i) => {
                        return <Stair key={i} x={stair*(userSize*2)} y={(this.userStartY+userSize)+(i*userSize * 2)} />
                    })}
                </g>
                
                <circle id='user' cx={0} cy={this.userStartY} r={userSize} />
                <Ground/>
                <CurrentScore 
                    title='Stairs Left' 
                    score={100 - this.props.stairIdx} 
                    x={hori.left + 10} 
                    y={vert.top + 50}
                    />
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
                dur=".05s"
                begin="indefinite"
                fill="freeze" 
            />
    )
};

export default Canvas;