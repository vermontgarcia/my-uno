const initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'SHOUFLE_DECK':
      return state;
    case 'DRAW_CARD':
      return state;
    default:
      return state
  }
}