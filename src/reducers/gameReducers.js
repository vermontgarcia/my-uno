const initialState = {
  deck: [],
  hand: [],
  discardPile: [],
}

export default (state = initialState, action) => {

  let deck = [...state.deck];
  let hand = [...state.hand];
  let discardPile = [...state.discardPile]

  switch(action.type){
    case 'GET_DECK':
      return {...state, deck: action.payload};
    case 'GET_HAND':
      for (let i=0; i<7; i++){
        hand.push(deck.pop());
      }
      return {...state, deck: deck, hand: hand};
    case 'PLAY_CARD':
      discardPile.unshift(hand.splice(action.payload, 1)[0]);
      return {...state, hand: hand, discardPile: discardPile};
    case 'SHOUFLE_DISCARD_PILE':
      let deckLength = discardPile.length
      let card = discardPile.shift();
      for(let i=1; i< deckLength; i++){
        deck.push(discardPile.splice(Math.floor(Math.random()*discardPile.length),1)[0]);
      }
      discardPile.unshift(card);
      return {...state, deck: deck, discardPile: discardPile};
    case 'DRAW_CARD':
      hand.unshift(deck.pop());
      return {...state, deck: deck, hand: hand};
    case 'START_GAME':
      discardPile.unshift(deck.pop());
      return {...state, deck: deck, discardPile: discardPile};
    default:
      return state
  }
}