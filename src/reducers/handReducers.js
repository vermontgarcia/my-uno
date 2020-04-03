const initialState = {
  deck: [],
  hand: [],
}

export default (state = initialState, action) => {
  //console.log('Hand Reducers State =====> ', state)
  //console.log('Hand Reducers Action =====> ', action)
  
  switch (action.type){
    case 'GET_HAND':
      return state;
    case 'PLAY_CARD':
      return state;
    case 'DRAW_CARD':
      return state;    
    default:
      return state;
  }
}