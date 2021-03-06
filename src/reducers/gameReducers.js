const initialState = {
  deck: [],
  hand: [],
  discardPile: [],
  handModalVisible: false,
  players: [],
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'GET_DECK':
      return { ...state };
    case 'GET_HAND':
      return { ...state };
    case 'PLAY_CARD':
      return { ...state };
    case 'SHOUFLE_DISCARD_PILE':
      return { ...state };
    case 'DRAW_CARD':
      return { ...state };
    case 'RETURN_CARD':
      return state;
    case 'START_GAME':
      return { ...state };
    case 'TOGGLE_MODAL':
      let { handModalVisible } = state;
      return { ...state, handModalVisible: !handModalVisible }
    case 'UPDATE_PLAYERS':
      return { ...state, players: action.payload }
    case 'UPDATE_DECK':
      return { ...state, deck: action.payload }
    case 'UPDATE_HAND':
      return { ...state, hand: action.payload }
    case 'UPDATE_DISCARD_PILE':
      return { ...state, discardPile: action.payload }
    default:
      return state
  }
}