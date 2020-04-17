import firebase from '../config/firebase';
import { initialDeck } from '../config/deck';

const room = 'myRoom'
const rootRef = firebase.database().ref().child(`gameRooms/`);
const tableRef = rootRef.child(room);

const deckRef = tableRef.child('deck');
const discardPileRef = tableRef.child('discardPile');

export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value },
  }
}

export const login = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  }
}

export const getHand = (oldDeck, oldHand, userId) => {

  let deck = [...oldDeck]
  let hand = [...oldHand]
  
  for(let i = 0; i < 7; i++){
    hand.push(deck.pop())
  }

  const handRef = tableRef.child(userId).child('hand');
  
  deckRef.set(deck)
  handRef.set(hand)
  
  return ({
      type: 'GET_HAND',
  });
}

export const playCard = (oldHand, userId, index, oldDiscardPile) => {

  let hand = [...oldHand];
  let discardPile = [...oldDiscardPile]

  discardPile.push(hand.splice(index, 1)[0]);
  
  const handRef = tableRef.child(userId).child('hand');

  handRef.set(hand)
  discardPileRef.set(discardPile)

  return {
    type: 'PLAY_CARD',
  }
}

export const drawCard = (oldDeck, oldHand, userId) => {

  let hand = [...oldHand];
  let deck = [...oldDeck];

  hand.unshift(deck.pop());

  const handRef = tableRef.child(userId).child('hand');

  deckRef.set(deck)
  handRef.set(hand)
  
  return {
    type: 'DRAW_CARD',
  }
}

export const shoufleDeck = (oldDiscardPile) => {

  if(oldDiscardPile.length !== 0){

    let discardPile = [...oldDiscardPile];
    let deck = [];
    let card = discardPile.pop();
    let deckLength = discardPile.length

    for(let i=0; i< deckLength; i++){
      deck.push(discardPile.splice(Math.floor(Math.random()*discardPile.length),1)[0]);
    }
    discardPile.push(card);

    return (dispatch) => {
      deckRef.set(deck)
      discardPileRef.set(discardPile)
        .then(() => dispatch( {type: 'SHOUFLE_DISCARD_PILE'} ))
    }
  }

  let deckLength = initialDeck.length
  let deck = [];
  for(let i=0; i< deckLength; i++){
    deck.push(initialDeck.splice(Math.floor(Math.random()*initialDeck.length),1)[0]);
  }

  return (dispatch) => {
    deckRef.set(deck)
      .then(() => dispatch({ type: 'GET_DECK' }));
  };

}

export const startGame = (oldDeck, oldDiscardPile) => {

  let deck = [...oldDeck];
  let discardPile = [...oldDiscardPile];

  discardPile.push(deck.pop());

  deckRef.set(deck)
  discardPileRef.set(discardPile)

  return {
    type: 'START_GAME',
  }

}

export const shoutUNO = () => {

}

export const endGame = () => {

}

export const updateDeck = (deck) => {
  return {
    type: 'UPDATE_DECK',
    payload: deck,
  }
}

export const updateHand = (hand) => {
  return {
    type: 'UPDATE_HAND',
    payload: hand,
  }
}

export const updateDiscardPile = (discardPile) => {
  return {
    type: 'UPDATE_DISCARD_PILE',
    payload: discardPile,
  }
}