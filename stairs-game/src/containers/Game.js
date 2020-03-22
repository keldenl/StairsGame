import { connect } from 'react-redux';
import { moveUser, startGame } from '../actions/index';

import App from '../App';

const mapStateToProps = state => ({
  gameState: state.gameState,
  position: state.position,
  prevPosition: state.prevPosition,
  stairList: state.stairList,
  stairIdx: state.stairIdx,
  lives: state.lives
});

const mapDispatchToProps = dispatch => ({
  moveUser: (keyPressed) => {
    dispatch(moveUser(keyPressed));
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;