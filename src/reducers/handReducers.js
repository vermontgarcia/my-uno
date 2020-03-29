const initialState = [require('../../assets/zeroblue.png'), require('../../assets/zeroblue.png'), require('../../assets/wilddrawfour.png'),require('../../assets/zeroblue.png'), require('../../assets/fivered.png'), require('../../assets/wilddrawfour.png')];

export default (state = initialState, action) => {
  switch (action.type){
    case 'PLAY_CARD':
      return state;
    case 'DRAW_CARD':
      return state;    
    default:
      return state;
  }
}