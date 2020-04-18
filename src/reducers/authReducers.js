const initialState = {
  userId: '',
  name: 'VG',
  loginErrorMsg: '',
  user: {},
  username: ''
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value }
    case 'LOGIN_SUCCESS':
      let userId = action.payload.user.uid;
      let user = action.payload;
      return { ...state, userId: userId, user: user  };
    case 'LOGIN_FAILURE':
      return { ...state , loginErrorMsg: action.payload};
    default:
      return state;
  }
}