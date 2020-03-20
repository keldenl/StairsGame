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

    console.log(state.stairList);

    if (position !== state.stairList[1]) { return state; }
    let stairList = state.stairList;
    stairList.shift();
    stairList.push(getNewStair(stairList[stairList.length-1]));
    console.log("UPDATE STAIRLIST")
    return {
        ...state,
        prevPosition,
        position,
        stairList
    };
}

export default moveUser;