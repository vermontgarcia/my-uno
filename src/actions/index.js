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
  return {
    type: 'GET_HAND',
  }
}

export const playCard = (index) => {
  return {
    type: 'PLAY_CARD',
    payload: index,
  }
}

export const drawCard = () => {
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
