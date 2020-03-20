import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Canvas from './components/Canvas';

class App extends Component {
  constructor(props) {
    super(props);
    window.addEventListener("keyup", this.onDown);
  }

  onDown = event => {
    this.props.moveUser(event.key);
    console.log("MOUSEDOWN")
  }

  render() {
    return (
      <Canvas position={this.props.position} prevPosition={this.props.prevPosition} stairList={this.props.stairList}/>
    );
  }
}

App.propTypes = {
  
};

export default App;

// componentDidMount() {
//   const self = this;
//   setInterval(() => {
//       self.props.moveObjects(self.canvasMousePosition);
//   }, 10);
// }

// trackMouse(event) {
//   this.canvasMousePosition = getCanvasPosition(event);
// }

// render() {
//   return (
//     <Canvas
//       angle={this.props.angle}
//       trackMouse={event => (this.trackMouse(event))}
//     />
//   );
// }