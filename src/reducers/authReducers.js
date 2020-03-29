const initialState = {
  username: '',
  user: {},
  loginErrorMsg: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value }
    case 'LOGIN_SUCCESS':
      return { ...state , user: action.payload};
    case 'LOGIN_FAILURE':
      return { ...state , loginErrorMsg: action.payload};
    default:
      return state;
  }
}