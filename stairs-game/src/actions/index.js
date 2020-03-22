export const MOVE_USER = 'MOVE_USER';
export const START_GAME = 'START_GAME';

export const moveUser = keyPressed => ({
  type: MOVE_USER,
  keyPressed,
});

export const startGame = () => ({
  type: START_GAME,
});