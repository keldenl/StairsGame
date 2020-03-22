import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Canvas from './components/Canvas';

class App extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("keyup", this.onDown);
  }

  componentDidMount() {
    window.onresize = () => {
      const cnv = document.getElementById('game-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  onDown = event => {
    if (event.key === ' ') {
      this.props.startGame();
    } else if (this.props.gameState.started) {
      this.props.moveUser(event.key);
    }
  }

  render() {
    return (
      <Canvas 
        position={this.props.position} 
        prevPosition={this.props.prevPosition} 
        stairIdx={this.props.stairIdx}
        stairList={this.props.stairList}
        gameState={this.props.gameState}
        startTime={this.props.startTime}
      />
    );
  }
}

App.propTypes = {
  
};

export default App;