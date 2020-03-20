import { MOVE_USER } from '../actions';
import moveUser from './moveUser';
import { getNewStair } from '../utils/constants';

let stairList = [0];
for (let i = 0; i < 10; i++) {
    stairList.push(getNewStair(stairList[stairList.length-1]));
}

const initialState = {
    position: 0,
    prevPosition: 0,
    stairList: stairList
};
  
function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_USER:
          return moveUser(state, action);
        default:
          return state;
    }
}
  
export default reducer;