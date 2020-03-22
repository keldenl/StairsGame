import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {userSize, vert, hori} from '../utils/constants';

import Sky from './Sky';
import Ground from './Ground';
import Stair from './Stair';
import CurrentScore from './CurrentScore';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = { time: 0, currIdx: 0 }
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

        this.timer = null;

        window.addEventListener("keyup", this.animate);
    }

    animate = () => {
        if (this.state.currIdx !== this.props.stairIdx) {
            this.animateRef.current.childNodes[0].beginElement();
            this.stairsRef.current.childNodes[0].beginElement();
            this.setState({ currIdx: this.props.stairIdx });
        }
    }

    componentDidMount() {
        // timer
        this.timer = setInterval(()=> this.setState({time: (new Date().getTime() - this.props.startTime) / 1000}), 50);
    }

    render () {       
        let textDisplay = '';
        
        if (this.props.gameState.started) {
            textDisplay = 
                <Fragment>
                    <CurrentScore 
                        title='Stairs Left' 
                        score={this.props.stairList.length-1-this.props.stairIdx} 
                        x={hori.left + 10} 
                        y={vert.top + 50}
                        />

                    <CurrentScore 
                        title='Time Elapsed' 
                        score={this.state.time} 
                        x={hori.left + 10} 
                        y={vert.top + 150}
                        />
                </Fragment>
        } else if (this.props.stairIdx === 0) {
            textDisplay = (<CurrentScore title="START GAME" x={-100} y={0}/>)
        } else {
            window.clearTimeout(this.timer);
            textDisplay = (<CurrentScore title="END SCORE" score={this.state.time} x={-100} y={0}/>)
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
                    <div id="animateUser" ref={this.animateRef}>
                        <AnimateMove id='user' attr='cx' from={this.props.prevPosition * (userSize * 2)} to={this.props.position * (userSize * 2)} />    
                    </div>


                    <Sky/>
                    <g id="stairs" ref={this.stairsRef}>
                        <animateTransform attributeName="transform" attributeType="XML" type="translate" from={`0 ${(this.props.stairIdx-1) * (userSize * -2)}`} to={`0 ${this.props.stairIdx * (userSize * -2)}`} dur=".15s" begin="indefinite" fill="freeze"></animateTransform>

                        {this.props.stairList.map((stair, i) => {
                            return <Stair key={i} x={stair*(userSize*2)} y={(this.userStartY+userSize)+(i*userSize * 2)} />
                        })}
                    </g>
                    
                    <circle id='user' cx={0} cy={this.userStartY} r={userSize} />
                    <Ground/>
                    {textDisplay}
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
                dur=".15s"
                begin="indefinite"
                fill="freeze" 
            />
    )
};

export default Canvas;