const initialState = {
  userId: '',
  name: '',
  loginErrorMsg: '',
  user: {},
  username: '',
  userModalVisible: true,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.field]: action.payload.value }
    case 'LOGIN_SUCCESS':
      let userId = action.payload.user.uid;
      let user = action.payload;
      return { ...state, userId: userId, user: user };
    case 'LOGIN_FAILURE':
      return { ...state, loginErrorMsg: action.payload };
    case 'TOGGLE_USER_MODAL':
      let { userModalVisible } = state;
      return { ...state, userModalVisible: !userModalVisible }
    default:
      return state;
  }
}