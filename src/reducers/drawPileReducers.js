const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'GET_DECK':
      return action.payload;
    case 'SHOUFLE_DECK':
      return state;
    case 'DRAW_CARD':
      return state;
    default:
      return state
  }
}