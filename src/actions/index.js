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
        console.log('USER LOGGED ====', user)
        dispatch({type: 'LOGIN_SUCCESS', payload: user})
      })
      .catch(error => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log('Error code: ', errorCode);
        console.log('Error Message: ', errorMessage);
        // ...
        dispatch({type: 'LOGIN_FAILURE', payload: errorMessage})

      }
    );
  }
}

export const drawCard = (card) => {
  console.log('Action Draw Card')
  return {
    type: 'DRAW_CARD',
    payload: card
  }
}

export const playCard = (card) => {
  console.log('Action Play Card')
  return {
    type: 'PLAY_CARD',
    payload: card
  }
}