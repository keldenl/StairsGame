import { connect } from 'react-redux';
import { moveUser } from '../actions/index';

import App from '../App';

const mapStateToProps = state => ({
  position: state.position,
  prevPosition: state.prevPosition,
  stairList: state.stairList
});

const mapDispatchToProps = dispatch => ({
  moveUser: (keyPressed) => {
    dispatch(moveUser(keyPressed));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;