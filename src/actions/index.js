import firebase from 'firebase';

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

export const getHand = (deck) => {
  let hand = []
  for (let i=0; i<7; i++){
    hand.push(deck.splice(deck.length,1)[0]);
  }
  return {
    type: 'GET_HAND',
    payload: hand
  }
}

export const playCard = (card) => {
  console.log('Action Play Card')
  return {
    type: 'PLAY_CARD',
    payload: card
  }
}

export const drawCard = (card) => {
  console.log('Action Draw Card')
  return {
    type: 'DRAW_CARD',
    payload: card
  }
}

export const shoufleDeck = (deck) => {
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

export const shoutUNO = () => {

}

export const endGame = () => {

}
