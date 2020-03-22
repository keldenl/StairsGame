import { MOVE_USER, START_GAME } from '../actions';
import moveUser from './moveUser';
import startGame from './startGame';
import { getNewStair } from '../utils/constants';

let stairList = [0];
for (let i = 0; i < 100; i++) {
    stairList.push(getNewStair(stairList[stairList.length-1]));
}

const initialGameState = {
    started: false,
    points: 0,
    lives: 3,
};

const initialState = {
    position: 0,
    prevPosition: 0,
    stairIdx: 0,
    stairList: stairList,
    gameState: initialGameState,
};
  
function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_USER:
          return moveUser(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        default:
          return state;
    }
}
  
export default reducer;