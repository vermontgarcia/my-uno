const initialState = [];

export default (state = initialState, action) => {
  switch (action.type){
    case 'GET_HAND':
      return action.payload;
    case 'PLAY_CARD':
      return state;
    case 'DRAW_CARD':
      return state;    
    default:
      return state;
  }
}