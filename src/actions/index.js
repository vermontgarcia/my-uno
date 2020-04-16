import firebase from '../config/firebase';
import { deck } from '../config/deck';

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
  console.log('Loggin in')

  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  }



  // return (dispatch) => {
  //   firebase.auth()
  //     .signInAnonymously()
  //     .then(user=>{
  //       return dispatch({
  //         type: 'LOGIN_SUCCESS',
  //         payload: user
  //       })
  //     })
  //     .catch(error => {
  //       return dispatch({
  //         type: 'LOGIN_FAILURE',
  //         payload: error.message
  //       })
  //     }
  //   );
  // }
}

export const getHand = (oldDeck, oldHand, userId) => {

  console.log('Action getHand' , oldDeck.length, oldHand.length, userId )

  let deck = [...oldDeck]
  let hand = [...oldHand]
  
  for(let i = 0; i < 7; i++){
    console.log('Action For')
    hand.push(deck.pop())
    console.log('Getting Hand', deck.length, hand.length, userId)
  }

  console.log('Getting Hand', deck.length, hand.length, userId)

  const handRef = tableRef.child(userId).child('hand');
  console.log('Action handRef', handRef)
  
  deckRef.set({deck})
  handRef.set({hand})
  
  return ({
      type: 'GET_HAND',
      payload: { deck, hand },
  });
  

}


export const playCard = (index) => {
  return {
    type: 'PLAY_CARD',
    payload: index,
  }
}

export const drawCard = () => {
  //   type: 'LOGIN_FAILURE',
  //   payload: error.message
  // })
  return {
    type: 'DRAW_CARD',
  }
}

export const shoufleDeck = () => {

  if(deck.length === 0){
    return {
      type: 'SHOUFLE_DISCARD_PILE',
    }
  }

  let deckLength = deck.length
  let newDeck = [];
  for(let i=0; i< deckLength; i++){
    newDeck.push(deck.splice(Math.floor(Math.random()*deck.length),1)[0]);
  }

  //const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    deckRef.set({deck: newDeck})
      .then(() => dispatch({ type: 'GET_DECK', payload: newDeck  }));
  };

}

export const startGame = () => {

  firebase.database


  return {
    type: 'START_GAME',
  }

}

export const shoutUNO = () => {

}

export const endGame = () => {

}


export const updateDeck = (deck) => {
  console.log('Action Updating Deck', deck)
  return {
    type: 'UPDATE_DECK',
    payload: deck,
  }
}

export const updateHand = (hand) => {
  console.log('Action Updating Hand', hand)
  return {
    type: 'UPDATE_HAND',
    payload: hand,
  }
}

export const updateDiscardPile = (discardPile) => {
  console.log('Action Updating DiscardPile', discardPile)
  return {
    type: 'UPDATE_DISCARD_PILE',
    payload: discardPile,
  }
}