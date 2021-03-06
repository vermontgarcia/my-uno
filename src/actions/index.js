import firebase from '../config/firebase';
import { initialDeck } from '../config/deck';

const room = 'newRoom'
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

export const registerName = (name, userId) => {
  const nameRef = tableRef.child('users').child(userId).child('name');
  return dispatch => {
    nameRef.set(name)
      .then(() => {
        dispatch({ type: 'TOGGLE_USER_MODAL' })
      })
  }
}

export const getHand = (oldDeck, oldHand, userId) => {

  let deck = [...oldDeck]
  let hand = [...oldHand]

  for (let i = 0; i < 7; i++) {
    hand.push(deck.pop())
  }

  const handRef = tableRef.child('users').child(userId).child('hand');

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

  const handRef = tableRef.child('users').child(userId).child('hand');

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

  const handRef = tableRef.child('users').child(userId).child('hand');

  deckRef.set(deck)
  handRef.set(hand)

  return {
    type: 'DRAW_CARD',
  }
}

export const returnCard = (oldDiscardPile, oldHand, userId) => {

  let hand = [...oldHand];
  let discardPile = [...oldDiscardPile];

  hand.unshift(discardPile.pop());

  const handRef = tableRef.child('users').child(userId).child('hand');

  discardPileRef.set(discardPile)
  handRef.set(hand)

  return {
    type: 'RETURN_CARD',
  }
}

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL',
  }
}

export const toggleUserModal = () => {
  return {
    type: 'TOGGLE_USER_MODAL',
  }
}

export const shoufleDeck = (oldDiscardPile) => {

  if (oldDiscardPile.length !== 0) {

    let discardPile = [...oldDiscardPile];
    let deck = [];
    let card = discardPile.pop();
    let deckLength = discardPile.length

    for (let i = 0; i < deckLength; i++) {
      deck.push(discardPile.splice(Math.floor(Math.random() * discardPile.length), 1)[0]);
    }
    discardPile.push(card);

    return (dispatch) => {
      deckRef.set(deck)
      discardPileRef.set(discardPile)
        .then(() => dispatch({ type: 'SHOUFLE_DISCARD_PILE' }))
    }
  }

  let deckLength = initialDeck.length
  let newDeck = [...initialDeck]
  let deck = [];
  for (let i = 0; i < deckLength; i++) {
    deck.push(newDeck.splice(Math.floor(Math.random() * newDeck.length), 1)[0]);
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

export const updateUsers = (playersObj) => {
  let playerIds = []
  let players = []
  playerIds = Object.keys(playersObj)

  // console.log('Array Users =====> ', userIds)

  playerIds.forEach(id => {
    // console.log(playersObj[id].name, playersObj[id].hand ? playersObj[id].hand.length : 0)
    let user = {}
    user.id = id
    user.name = playersObj[id].name
    user.hand = playersObj[id].hand
    players.push(user)
  })
  // console.log(players)
  return {
    type: 'UPDATE_PLAYERS',
    payload: players,
  }
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