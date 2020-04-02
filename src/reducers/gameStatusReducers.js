const initialState = {
  isActive = false,
  isWinner = false,
  numOfPlayers = '',
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'GAME_STARTED':
      return {...state, isActive: true, isWinner: false};
    case 'GAME_OVER':
      return {...state, isActive: false};
    case 'WINNER':
      return {...state, isWinner: true};
    default:
      return state
  }
}