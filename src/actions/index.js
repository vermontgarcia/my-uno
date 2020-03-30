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
          payload: user})
      })
      .catch(error => {
        return dispatch({
          type: 'LOGIN_FAILURE',
          payload: error.message})

      }
    );
  }
}


export const startGame = () => {

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

export const shoufleDeck = () => {

}

export const shoutUNO = () => {

}

export const endGame = () => {

}
