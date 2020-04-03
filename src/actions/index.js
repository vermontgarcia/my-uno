import firebase from 'firebase';
import { deck } from '../config/deck';

export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value },
  }
}

export const login = () => {
  return (dispatch) => {
    firebase.auth()
      .signInAnonymously()
      .then(user=>{
        return dispatch({
          type: 'LOGIN_SUCCESS',
          payload: user
        })
      })
      .catch(error => {
        return dispatch({
          type: 'LOGIN_FAILURE',
          payload: error.message
        })
      }
    );
  }
}

export const getHand = () => {
  console.log('Action getting hand ' )
  return {
    type: 'GET_HAND',
  }
}

export const playCard = (e) => {
  console.log('Action Play Card', e)
  return {
    type: 'PLAY_CARD',
  }
}

export const drawCard = () => {
  console.log('Action Draw Card')
  return {
    type: 'DRAW_CARD',
  }
}

export const shoufleDeck = () => {
  let deckLength = deck.length
  let newDeck = [];
  for(let i=0; i< deckLength; i++){
    newDeck.push(deck.splice(Math.floor(Math.random()*deck.length),1)[0]);
  }
  return {
    type: 'GET_DECK',
    payload: newDeck
  }
}

export const startGame = () => {
  return {
    type: 'START_GAME',
  }

}

export const shoutUNO = () => {

}

export const endGame = () => {

}
