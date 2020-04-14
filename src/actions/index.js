import firebase, { database } from 'firebase';
import { deck } from '../config/deck';


export const authInputChange = ({ field, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { field, value },
  }
}

export const login = () => {
  console.log('Loggin in')
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
  return (dispatch) => {
    database()
      .ref(`/gameRooms/myRoom/-M48FmYxmRBD6GEKQoVG/newHand`)
      .on('value', snapshot => {
        console.log('Hand Length =====> ', snapshot.val().length)
        return dispatch ({
          type: 'GET_HAND',
          payload: snapshot.val(),
        })
      })
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

  //const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/gameRooms/myRoom`)
      .push({ deck: newDeck })
      .then(() => dispatch({ type: 'GET_DECK', payload: newDeck  }));
  };


  // return {
  //   type: 'GET_DECK',
  //   payload: newDeck
  // }
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