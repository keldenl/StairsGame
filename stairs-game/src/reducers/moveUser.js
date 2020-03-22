import { getNewStair } from "../utils/constants";

function moveUser(state, action) {
    const validKeys = ['ArrowLeft', 'ArrowRight', 'ArrowDown'];
    if (!validKeys.includes(action.keyPressed)) return state;
    var prevPosition = state.position;
    var position = state.position;
    switch (action.keyPressed) {
        case validKeys[0]: position -= 1; break;
        case validKeys[1]: position += 1; break;
        default: break;
    }

    if (position !== state.stairList[state.stairIdx+1]) { 
        var gameState = Object.assign({}, state.gameState);
        gameState.lives -= 1;
        return {
            ...state,
            gameState
        } 
    }

    let stairIdx = state.stairIdx+1;
    return {
        ...state,
        prevPosition,
        position,
        stairIdx
    };
}

export default moveUser;